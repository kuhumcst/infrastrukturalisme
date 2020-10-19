goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43912 = arguments.length;
switch (G__43912) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43923 = (function (f,blockable,meta43924){
this.f = f;
this.blockable = blockable;
this.meta43924 = meta43924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43925,meta43924__$1){
var self__ = this;
var _43925__$1 = this;
return (new cljs.core.async.t_cljs$core$async43923(self__.f,self__.blockable,meta43924__$1));
}));

(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43925){
var self__ = this;
var _43925__$1 = this;
return self__.meta43924;
}));

(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43924","meta43924",-431328187,null)], null);
}));

(cljs.core.async.t_cljs$core$async43923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43923");

(cljs.core.async.t_cljs$core$async43923.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43923.
 */
cljs.core.async.__GT_t_cljs$core$async43923 = (function cljs$core$async$__GT_t_cljs$core$async43923(f__$1,blockable__$1,meta43924){
return (new cljs.core.async.t_cljs$core$async43923(f__$1,blockable__$1,meta43924));
});

}

return (new cljs.core.async.t_cljs$core$async43923(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43975 = arguments.length;
switch (G__43975) {
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
var G__43984 = arguments.length;
switch (G__43984) {
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
var G__44002 = arguments.length;
switch (G__44002) {
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
var val_46158 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46158) : fn1.call(null,val_46158));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46158) : fn1.call(null,val_46158));
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
var G__44004 = arguments.length;
switch (G__44004) {
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
var n__4613__auto___46169 = n;
var x_46170 = (0);
while(true){
if((x_46170 < n__4613__auto___46169)){
(a[x_46170] = x_46170);

var G__46171 = (x_46170 + (1));
x_46170 = G__46171;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44016 = (function (flag,meta44017){
this.flag = flag;
this.meta44017 = meta44017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44018,meta44017__$1){
var self__ = this;
var _44018__$1 = this;
return (new cljs.core.async.t_cljs$core$async44016(self__.flag,meta44017__$1));
}));

(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44018){
var self__ = this;
var _44018__$1 = this;
return self__.meta44017;
}));

(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44017","meta44017",72362638,null)], null);
}));

(cljs.core.async.t_cljs$core$async44016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44016");

(cljs.core.async.t_cljs$core$async44016.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44016.
 */
cljs.core.async.__GT_t_cljs$core$async44016 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44016(flag__$1,meta44017){
return (new cljs.core.async.t_cljs$core$async44016(flag__$1,meta44017));
});

}

return (new cljs.core.async.t_cljs$core$async44016(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44029 = (function (flag,cb,meta44030){
this.flag = flag;
this.cb = cb;
this.meta44030 = meta44030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44031,meta44030__$1){
var self__ = this;
var _44031__$1 = this;
return (new cljs.core.async.t_cljs$core$async44029(self__.flag,self__.cb,meta44030__$1));
}));

(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44031){
var self__ = this;
var _44031__$1 = this;
return self__.meta44030;
}));

(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44030","meta44030",1112140456,null)], null);
}));

(cljs.core.async.t_cljs$core$async44029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44029");

(cljs.core.async.t_cljs$core$async44029.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44029.
 */
cljs.core.async.__GT_t_cljs$core$async44029 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44029(flag__$1,cb__$1,meta44030){
return (new cljs.core.async.t_cljs$core$async44029(flag__$1,cb__$1,meta44030));
});

}

return (new cljs.core.async.t_cljs$core$async44029(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44040_SHARP_){
var G__44042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44040_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44042) : fret.call(null,G__44042));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44041_SHARP_){
var G__44043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44041_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44043) : fret.call(null,G__44043));
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
var G__46179 = (i + (1));
i = G__46179;
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
var len__4736__auto___46184 = arguments.length;
var i__4737__auto___46185 = (0);
while(true){
if((i__4737__auto___46185 < len__4736__auto___46184)){
args__4742__auto__.push((arguments[i__4737__auto___46185]));

var G__46187 = (i__4737__auto___46185 + (1));
i__4737__auto___46185 = G__46187;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44046){
var map__44047 = p__44046;
var map__44047__$1 = (((((!((map__44047 == null))))?(((((map__44047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44047):map__44047);
var opts = map__44047__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44044){
var G__44045 = cljs.core.first(seq44044);
var seq44044__$1 = cljs.core.next(seq44044);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44045,seq44044__$1);
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
var G__44071 = arguments.length;
switch (G__44071) {
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
var c__43837__auto___46192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44100){
var state_val_44101 = (state_44100[(1)]);
if((state_val_44101 === (7))){
var inst_44096 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44110_46193 = state_44100__$1;
(statearr_44110_46193[(2)] = inst_44096);

(statearr_44110_46193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (1))){
var state_44100__$1 = state_44100;
var statearr_44111_46195 = state_44100__$1;
(statearr_44111_46195[(2)] = null);

(statearr_44111_46195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (4))){
var inst_44079 = (state_44100[(7)]);
var inst_44079__$1 = (state_44100[(2)]);
var inst_44080 = (inst_44079__$1 == null);
var state_44100__$1 = (function (){var statearr_44112 = state_44100;
(statearr_44112[(7)] = inst_44079__$1);

return statearr_44112;
})();
if(cljs.core.truth_(inst_44080)){
var statearr_44113_46196 = state_44100__$1;
(statearr_44113_46196[(1)] = (5));

} else {
var statearr_44114_46197 = state_44100__$1;
(statearr_44114_46197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (13))){
var state_44100__$1 = state_44100;
var statearr_44115_46198 = state_44100__$1;
(statearr_44115_46198[(2)] = null);

(statearr_44115_46198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (6))){
var inst_44079 = (state_44100[(7)]);
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44100__$1,(11),to,inst_44079);
} else {
if((state_val_44101 === (3))){
var inst_44098 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44100__$1,inst_44098);
} else {
if((state_val_44101 === (12))){
var state_44100__$1 = state_44100;
var statearr_44116_46200 = state_44100__$1;
(statearr_44116_46200[(2)] = null);

(statearr_44116_46200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (2))){
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44100__$1,(4),from);
} else {
if((state_val_44101 === (11))){
var inst_44089 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
if(cljs.core.truth_(inst_44089)){
var statearr_44117_46203 = state_44100__$1;
(statearr_44117_46203[(1)] = (12));

} else {
var statearr_44118_46205 = state_44100__$1;
(statearr_44118_46205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (9))){
var state_44100__$1 = state_44100;
var statearr_44119_46206 = state_44100__$1;
(statearr_44119_46206[(2)] = null);

(statearr_44119_46206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (5))){
var state_44100__$1 = state_44100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44120_46208 = state_44100__$1;
(statearr_44120_46208[(1)] = (8));

} else {
var statearr_44121_46211 = state_44100__$1;
(statearr_44121_46211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (14))){
var inst_44094 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44122_46212 = state_44100__$1;
(statearr_44122_46212[(2)] = inst_44094);

(statearr_44122_46212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (10))){
var inst_44086 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44123_46213 = state_44100__$1;
(statearr_44123_46213[(2)] = inst_44086);

(statearr_44123_46213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (8))){
var inst_44083 = cljs.core.async.close_BANG_(to);
var state_44100__$1 = state_44100;
var statearr_44124_46216 = state_44100__$1;
(statearr_44124_46216[(2)] = inst_44083);

(statearr_44124_46216[(1)] = (10));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_44125 = [null,null,null,null,null,null,null,null];
(statearr_44125[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_44125[(1)] = (1));

return statearr_44125;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_44100){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44100);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44126){var ex__43739__auto__ = e44126;
var statearr_44127_46220 = state_44100;
(statearr_44127_46220[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44100[(4)]))){
var statearr_44128_46221 = state_44100;
(statearr_44128_46221[(1)] = cljs.core.first((state_44100[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46223 = state_44100;
state_44100 = G__46223;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_44100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_44100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44129 = f__43838__auto__();
(statearr_44129[(6)] = c__43837__auto___46192);

return statearr_44129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var process = (function (p__44131){
var vec__44132 = p__44131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44132,(1),null);
var job = vec__44132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43837__auto___46228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44139){
var state_val_44140 = (state_44139[(1)]);
if((state_val_44140 === (1))){
var state_44139__$1 = state_44139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44139__$1,(2),res,v);
} else {
if((state_val_44140 === (2))){
var inst_44136 = (state_44139[(2)]);
var inst_44137 = cljs.core.async.close_BANG_(res);
var state_44139__$1 = (function (){var statearr_44141 = state_44139;
(statearr_44141[(7)] = inst_44136);

return statearr_44141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44139__$1,inst_44137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_44142 = [null,null,null,null,null,null,null,null];
(statearr_44142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__);

(statearr_44142[(1)] = (1));

return statearr_44142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1 = (function (state_44139){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44139);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44143){var ex__43739__auto__ = e44143;
var statearr_44144_46236 = state_44139;
(statearr_44144_46236[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44139[(4)]))){
var statearr_44145_46237 = state_44139;
(statearr_44145_46237[(1)] = cljs.core.first((state_44139[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46238 = state_44139;
state_44139 = G__46238;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = function(state_44139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1.call(this,state_44139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44146 = f__43838__auto__();
(statearr_44146[(6)] = c__43837__auto___46228);

return statearr_44146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44147){
var vec__44148 = p__44147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44148,(1),null);
var job = vec__44148;
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
var n__4613__auto___46244 = n;
var __46245 = (0);
while(true){
if((__46245 < n__4613__auto___46244)){
var G__44151_46246 = type;
var G__44151_46247__$1 = (((G__44151_46246 instanceof cljs.core.Keyword))?G__44151_46246.fqn:null);
switch (G__44151_46247__$1) {
case "compute":
var c__43837__auto___46249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46245,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = ((function (__46245,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function (state_44164){
var state_val_44165 = (state_44164[(1)]);
if((state_val_44165 === (1))){
var state_44164__$1 = state_44164;
var statearr_44166_46250 = state_44164__$1;
(statearr_44166_46250[(2)] = null);

(statearr_44166_46250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (2))){
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44164__$1,(4),jobs);
} else {
if((state_val_44165 === (3))){
var inst_44162 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44164__$1,inst_44162);
} else {
if((state_val_44165 === (4))){
var inst_44154 = (state_44164[(2)]);
var inst_44155 = process(inst_44154);
var state_44164__$1 = state_44164;
if(cljs.core.truth_(inst_44155)){
var statearr_44167_46251 = state_44164__$1;
(statearr_44167_46251[(1)] = (5));

} else {
var statearr_44168_46252 = state_44164__$1;
(statearr_44168_46252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (5))){
var state_44164__$1 = state_44164;
var statearr_44169_46256 = state_44164__$1;
(statearr_44169_46256[(2)] = null);

(statearr_44169_46256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (6))){
var state_44164__$1 = state_44164;
var statearr_44171_46259 = state_44164__$1;
(statearr_44171_46259[(2)] = null);

(statearr_44171_46259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (7))){
var inst_44160 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
var statearr_44173_46260 = state_44164__$1;
(statearr_44173_46260[(2)] = inst_44160);

(statearr_44173_46260[(1)] = (3));


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
});})(__46245,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
;
return ((function (__46245,switch__43735__auto__,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_44175 = [null,null,null,null,null,null,null];
(statearr_44175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__);

(statearr_44175[(1)] = (1));

return statearr_44175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1 = (function (state_44164){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44164);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44177){var ex__43739__auto__ = e44177;
var statearr_44178_46264 = state_44164;
(statearr_44178_46264[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44164[(4)]))){
var statearr_44179_46266 = state_44164;
(statearr_44179_46266[(1)] = cljs.core.first((state_44164[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46269 = state_44164;
state_44164 = G__46269;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = function(state_44164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1.call(this,state_44164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__;
})()
;})(__46245,switch__43735__auto__,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
})();
var state__43839__auto__ = (function (){var statearr_44180 = f__43838__auto__();
(statearr_44180[(6)] = c__43837__auto___46249);

return statearr_44180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
});})(__46245,c__43837__auto___46249,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
);


break;
case "async":
var c__43837__auto___46272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46245,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = ((function (__46245,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function (state_44193){
var state_val_44194 = (state_44193[(1)]);
if((state_val_44194 === (1))){
var state_44193__$1 = state_44193;
var statearr_44195_46273 = state_44193__$1;
(statearr_44195_46273[(2)] = null);

(statearr_44195_46273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44194 === (2))){
var state_44193__$1 = state_44193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44193__$1,(4),jobs);
} else {
if((state_val_44194 === (3))){
var inst_44191 = (state_44193[(2)]);
var state_44193__$1 = state_44193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44193__$1,inst_44191);
} else {
if((state_val_44194 === (4))){
var inst_44183 = (state_44193[(2)]);
var inst_44184 = async(inst_44183);
var state_44193__$1 = state_44193;
if(cljs.core.truth_(inst_44184)){
var statearr_44196_46278 = state_44193__$1;
(statearr_44196_46278[(1)] = (5));

} else {
var statearr_44197_46281 = state_44193__$1;
(statearr_44197_46281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44194 === (5))){
var state_44193__$1 = state_44193;
var statearr_44198_46283 = state_44193__$1;
(statearr_44198_46283[(2)] = null);

(statearr_44198_46283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44194 === (6))){
var state_44193__$1 = state_44193;
var statearr_44199_46284 = state_44193__$1;
(statearr_44199_46284[(2)] = null);

(statearr_44199_46284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44194 === (7))){
var inst_44189 = (state_44193[(2)]);
var state_44193__$1 = state_44193;
var statearr_44200_46285 = state_44193__$1;
(statearr_44200_46285[(2)] = inst_44189);

(statearr_44200_46285[(1)] = (3));


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
});})(__46245,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
;
return ((function (__46245,switch__43735__auto__,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_44201 = [null,null,null,null,null,null,null];
(statearr_44201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__);

(statearr_44201[(1)] = (1));

return statearr_44201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1 = (function (state_44193){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44193);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44202){var ex__43739__auto__ = e44202;
var statearr_44203_46289 = state_44193;
(statearr_44203_46289[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44193[(4)]))){
var statearr_44204_46294 = state_44193;
(statearr_44204_46294[(1)] = cljs.core.first((state_44193[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46296 = state_44193;
state_44193 = G__46296;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = function(state_44193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1.call(this,state_44193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__;
})()
;})(__46245,switch__43735__auto__,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
})();
var state__43839__auto__ = (function (){var statearr_44206 = f__43838__auto__();
(statearr_44206[(6)] = c__43837__auto___46272);

return statearr_44206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
});})(__46245,c__43837__auto___46272,G__44151_46246,G__44151_46247__$1,n__4613__auto___46244,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44151_46247__$1)].join('')));

}

var G__46301 = (__46245 + (1));
__46245 = G__46301;
continue;
} else {
}
break;
}

var c__43837__auto___46302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44228){
var state_val_44229 = (state_44228[(1)]);
if((state_val_44229 === (7))){
var inst_44224 = (state_44228[(2)]);
var state_44228__$1 = state_44228;
var statearr_44232_46303 = state_44228__$1;
(statearr_44232_46303[(2)] = inst_44224);

(statearr_44232_46303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44229 === (1))){
var state_44228__$1 = state_44228;
var statearr_44233_46304 = state_44228__$1;
(statearr_44233_46304[(2)] = null);

(statearr_44233_46304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44229 === (4))){
var inst_44209 = (state_44228[(7)]);
var inst_44209__$1 = (state_44228[(2)]);
var inst_44210 = (inst_44209__$1 == null);
var state_44228__$1 = (function (){var statearr_44234 = state_44228;
(statearr_44234[(7)] = inst_44209__$1);

return statearr_44234;
})();
if(cljs.core.truth_(inst_44210)){
var statearr_44235_46305 = state_44228__$1;
(statearr_44235_46305[(1)] = (5));

} else {
var statearr_44236_46306 = state_44228__$1;
(statearr_44236_46306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44229 === (6))){
var inst_44214 = (state_44228[(8)]);
var inst_44209 = (state_44228[(7)]);
var inst_44214__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44216 = [inst_44209,inst_44214__$1];
var inst_44217 = (new cljs.core.PersistentVector(null,2,(5),inst_44215,inst_44216,null));
var state_44228__$1 = (function (){var statearr_44238 = state_44228;
(statearr_44238[(8)] = inst_44214__$1);

return statearr_44238;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44228__$1,(8),jobs,inst_44217);
} else {
if((state_val_44229 === (3))){
var inst_44226 = (state_44228[(2)]);
var state_44228__$1 = state_44228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44228__$1,inst_44226);
} else {
if((state_val_44229 === (2))){
var state_44228__$1 = state_44228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44228__$1,(4),from);
} else {
if((state_val_44229 === (9))){
var inst_44221 = (state_44228[(2)]);
var state_44228__$1 = (function (){var statearr_44240 = state_44228;
(statearr_44240[(9)] = inst_44221);

return statearr_44240;
})();
var statearr_44241_46307 = state_44228__$1;
(statearr_44241_46307[(2)] = null);

(statearr_44241_46307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44229 === (5))){
var inst_44212 = cljs.core.async.close_BANG_(jobs);
var state_44228__$1 = state_44228;
var statearr_44242_46308 = state_44228__$1;
(statearr_44242_46308[(2)] = inst_44212);

(statearr_44242_46308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44229 === (8))){
var inst_44214 = (state_44228[(8)]);
var inst_44219 = (state_44228[(2)]);
var state_44228__$1 = (function (){var statearr_44243 = state_44228;
(statearr_44243[(10)] = inst_44219);

return statearr_44243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44228__$1,(9),results,inst_44214);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_44244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__);

(statearr_44244[(1)] = (1));

return statearr_44244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1 = (function (state_44228){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44228);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44246){var ex__43739__auto__ = e44246;
var statearr_44247_46311 = state_44228;
(statearr_44247_46311[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44228[(4)]))){
var statearr_44248_46312 = state_44228;
(statearr_44248_46312[(1)] = cljs.core.first((state_44228[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46314 = state_44228;
state_44228 = G__46314;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = function(state_44228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1.call(this,state_44228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44250 = f__43838__auto__();
(statearr_44250[(6)] = c__43837__auto___46302);

return statearr_44250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


var c__43837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44288){
var state_val_44289 = (state_44288[(1)]);
if((state_val_44289 === (7))){
var inst_44284 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
var statearr_44293_46317 = state_44288__$1;
(statearr_44293_46317[(2)] = inst_44284);

(statearr_44293_46317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (20))){
var state_44288__$1 = state_44288;
var statearr_44294_46318 = state_44288__$1;
(statearr_44294_46318[(2)] = null);

(statearr_44294_46318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (1))){
var state_44288__$1 = state_44288;
var statearr_44295_46319 = state_44288__$1;
(statearr_44295_46319[(2)] = null);

(statearr_44295_46319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (4))){
var inst_44253 = (state_44288[(7)]);
var inst_44253__$1 = (state_44288[(2)]);
var inst_44254 = (inst_44253__$1 == null);
var state_44288__$1 = (function (){var statearr_44296 = state_44288;
(statearr_44296[(7)] = inst_44253__$1);

return statearr_44296;
})();
if(cljs.core.truth_(inst_44254)){
var statearr_44297_46320 = state_44288__$1;
(statearr_44297_46320[(1)] = (5));

} else {
var statearr_44298_46321 = state_44288__$1;
(statearr_44298_46321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (15))){
var inst_44266 = (state_44288[(8)]);
var state_44288__$1 = state_44288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44288__$1,(18),to,inst_44266);
} else {
if((state_val_44289 === (21))){
var inst_44279 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
var statearr_44299_46322 = state_44288__$1;
(statearr_44299_46322[(2)] = inst_44279);

(statearr_44299_46322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (13))){
var inst_44281 = (state_44288[(2)]);
var state_44288__$1 = (function (){var statearr_44300 = state_44288;
(statearr_44300[(9)] = inst_44281);

return statearr_44300;
})();
var statearr_44301_46327 = state_44288__$1;
(statearr_44301_46327[(2)] = null);

(statearr_44301_46327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (6))){
var inst_44253 = (state_44288[(7)]);
var state_44288__$1 = state_44288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44288__$1,(11),inst_44253);
} else {
if((state_val_44289 === (17))){
var inst_44274 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
if(cljs.core.truth_(inst_44274)){
var statearr_44302_46331 = state_44288__$1;
(statearr_44302_46331[(1)] = (19));

} else {
var statearr_44303_46332 = state_44288__$1;
(statearr_44303_46332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (3))){
var inst_44286 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44288__$1,inst_44286);
} else {
if((state_val_44289 === (12))){
var inst_44263 = (state_44288[(10)]);
var state_44288__$1 = state_44288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44288__$1,(14),inst_44263);
} else {
if((state_val_44289 === (2))){
var state_44288__$1 = state_44288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44288__$1,(4),results);
} else {
if((state_val_44289 === (19))){
var state_44288__$1 = state_44288;
var statearr_44304_46336 = state_44288__$1;
(statearr_44304_46336[(2)] = null);

(statearr_44304_46336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (11))){
var inst_44263 = (state_44288[(2)]);
var state_44288__$1 = (function (){var statearr_44305 = state_44288;
(statearr_44305[(10)] = inst_44263);

return statearr_44305;
})();
var statearr_44306_46340 = state_44288__$1;
(statearr_44306_46340[(2)] = null);

(statearr_44306_46340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (9))){
var state_44288__$1 = state_44288;
var statearr_44307_46341 = state_44288__$1;
(statearr_44307_46341[(2)] = null);

(statearr_44307_46341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (5))){
var state_44288__$1 = state_44288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44308_46342 = state_44288__$1;
(statearr_44308_46342[(1)] = (8));

} else {
var statearr_44309_46343 = state_44288__$1;
(statearr_44309_46343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (14))){
var inst_44266 = (state_44288[(8)]);
var inst_44266__$1 = (state_44288[(2)]);
var inst_44267 = (inst_44266__$1 == null);
var inst_44268 = cljs.core.not(inst_44267);
var state_44288__$1 = (function (){var statearr_44310 = state_44288;
(statearr_44310[(8)] = inst_44266__$1);

return statearr_44310;
})();
if(inst_44268){
var statearr_44311_46347 = state_44288__$1;
(statearr_44311_46347[(1)] = (15));

} else {
var statearr_44312_46348 = state_44288__$1;
(statearr_44312_46348[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (16))){
var state_44288__$1 = state_44288;
var statearr_44314_46349 = state_44288__$1;
(statearr_44314_46349[(2)] = false);

(statearr_44314_46349[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (10))){
var inst_44260 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
var statearr_44316_46354 = state_44288__$1;
(statearr_44316_46354[(2)] = inst_44260);

(statearr_44316_46354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (18))){
var inst_44271 = (state_44288[(2)]);
var state_44288__$1 = state_44288;
var statearr_44317_46361 = state_44288__$1;
(statearr_44317_46361[(2)] = inst_44271);

(statearr_44317_46361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44289 === (8))){
var inst_44257 = cljs.core.async.close_BANG_(to);
var state_44288__$1 = state_44288;
var statearr_44318_46362 = state_44288__$1;
(statearr_44318_46362[(2)] = inst_44257);

(statearr_44318_46362[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_44320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__);

(statearr_44320[(1)] = (1));

return statearr_44320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1 = (function (state_44288){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44288);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44321){var ex__43739__auto__ = e44321;
var statearr_44322_46370 = state_44288;
(statearr_44322_46370[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44288[(4)]))){
var statearr_44323_46371 = state_44288;
(statearr_44323_46371[(1)] = cljs.core.first((state_44288[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46373 = state_44288;
state_44288 = G__46373;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__ = function(state_44288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1.call(this,state_44288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44324 = f__43838__auto__();
(statearr_44324[(6)] = c__43837__auto__);

return statearr_44324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

return c__43837__auto__;
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
var G__44328 = arguments.length;
switch (G__44328) {
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
var G__44334 = arguments.length;
switch (G__44334) {
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
var G__44337 = arguments.length;
switch (G__44337) {
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
var c__43837__auto___46390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44365){
var state_val_44366 = (state_44365[(1)]);
if((state_val_44366 === (7))){
var inst_44361 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44367_46393 = state_44365__$1;
(statearr_44367_46393[(2)] = inst_44361);

(statearr_44367_46393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (1))){
var state_44365__$1 = state_44365;
var statearr_44368_46395 = state_44365__$1;
(statearr_44368_46395[(2)] = null);

(statearr_44368_46395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (4))){
var inst_44342 = (state_44365[(7)]);
var inst_44342__$1 = (state_44365[(2)]);
var inst_44343 = (inst_44342__$1 == null);
var state_44365__$1 = (function (){var statearr_44369 = state_44365;
(statearr_44369[(7)] = inst_44342__$1);

return statearr_44369;
})();
if(cljs.core.truth_(inst_44343)){
var statearr_44370_46398 = state_44365__$1;
(statearr_44370_46398[(1)] = (5));

} else {
var statearr_44371_46399 = state_44365__$1;
(statearr_44371_46399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (13))){
var state_44365__$1 = state_44365;
var statearr_44372_46400 = state_44365__$1;
(statearr_44372_46400[(2)] = null);

(statearr_44372_46400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (6))){
var inst_44342 = (state_44365[(7)]);
var inst_44348 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44342) : p.call(null,inst_44342));
var state_44365__$1 = state_44365;
if(cljs.core.truth_(inst_44348)){
var statearr_44373_46401 = state_44365__$1;
(statearr_44373_46401[(1)] = (9));

} else {
var statearr_44374_46402 = state_44365__$1;
(statearr_44374_46402[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (3))){
var inst_44363 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44365__$1,inst_44363);
} else {
if((state_val_44366 === (12))){
var state_44365__$1 = state_44365;
var statearr_44375_46404 = state_44365__$1;
(statearr_44375_46404[(2)] = null);

(statearr_44375_46404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (2))){
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44365__$1,(4),ch);
} else {
if((state_val_44366 === (11))){
var inst_44342 = (state_44365[(7)]);
var inst_44352 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44365__$1,(8),inst_44352,inst_44342);
} else {
if((state_val_44366 === (9))){
var state_44365__$1 = state_44365;
var statearr_44376_46407 = state_44365__$1;
(statearr_44376_46407[(2)] = tc);

(statearr_44376_46407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (5))){
var inst_44345 = cljs.core.async.close_BANG_(tc);
var inst_44346 = cljs.core.async.close_BANG_(fc);
var state_44365__$1 = (function (){var statearr_44377 = state_44365;
(statearr_44377[(8)] = inst_44345);

return statearr_44377;
})();
var statearr_44378_46408 = state_44365__$1;
(statearr_44378_46408[(2)] = inst_44346);

(statearr_44378_46408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (14))){
var inst_44359 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44379_46409 = state_44365__$1;
(statearr_44379_46409[(2)] = inst_44359);

(statearr_44379_46409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (10))){
var state_44365__$1 = state_44365;
var statearr_44380_46410 = state_44365__$1;
(statearr_44380_46410[(2)] = fc);

(statearr_44380_46410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (8))){
var inst_44354 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
if(cljs.core.truth_(inst_44354)){
var statearr_44382_46415 = state_44365__$1;
(statearr_44382_46415[(1)] = (12));

} else {
var statearr_44383_46417 = state_44365__$1;
(statearr_44383_46417[(1)] = (13));

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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_44384 = [null,null,null,null,null,null,null,null,null];
(statearr_44384[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_44384[(1)] = (1));

return statearr_44384;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_44365){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44365);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44386){var ex__43739__auto__ = e44386;
var statearr_44387_46419 = state_44365;
(statearr_44387_46419[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44365[(4)]))){
var statearr_44388_46421 = state_44365;
(statearr_44388_46421[(1)] = cljs.core.first((state_44365[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46424 = state_44365;
state_44365 = G__46424;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_44365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_44365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44389 = f__43838__auto__();
(statearr_44389[(6)] = c__43837__auto___46390);

return statearr_44389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var c__43837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44416){
var state_val_44417 = (state_44416[(1)]);
if((state_val_44417 === (7))){
var inst_44410 = (state_44416[(2)]);
var state_44416__$1 = state_44416;
var statearr_44418_46428 = state_44416__$1;
(statearr_44418_46428[(2)] = inst_44410);

(statearr_44418_46428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (1))){
var inst_44390 = init;
var inst_44391 = inst_44390;
var state_44416__$1 = (function (){var statearr_44419 = state_44416;
(statearr_44419[(7)] = inst_44391);

return statearr_44419;
})();
var statearr_44420_46430 = state_44416__$1;
(statearr_44420_46430[(2)] = null);

(statearr_44420_46430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (4))){
var inst_44395 = (state_44416[(8)]);
var inst_44395__$1 = (state_44416[(2)]);
var inst_44396 = (inst_44395__$1 == null);
var state_44416__$1 = (function (){var statearr_44423 = state_44416;
(statearr_44423[(8)] = inst_44395__$1);

return statearr_44423;
})();
if(cljs.core.truth_(inst_44396)){
var statearr_44424_46431 = state_44416__$1;
(statearr_44424_46431[(1)] = (5));

} else {
var statearr_44425_46432 = state_44416__$1;
(statearr_44425_46432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (6))){
var inst_44395 = (state_44416[(8)]);
var inst_44399 = (state_44416[(9)]);
var inst_44391 = (state_44416[(7)]);
var inst_44399__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44391,inst_44395) : f.call(null,inst_44391,inst_44395));
var inst_44402 = cljs.core.reduced_QMARK_(inst_44399__$1);
var state_44416__$1 = (function (){var statearr_44427 = state_44416;
(statearr_44427[(9)] = inst_44399__$1);

return statearr_44427;
})();
if(inst_44402){
var statearr_44428_46440 = state_44416__$1;
(statearr_44428_46440[(1)] = (8));

} else {
var statearr_44429_46441 = state_44416__$1;
(statearr_44429_46441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (3))){
var inst_44412 = (state_44416[(2)]);
var state_44416__$1 = state_44416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44416__$1,inst_44412);
} else {
if((state_val_44417 === (2))){
var state_44416__$1 = state_44416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44416__$1,(4),ch);
} else {
if((state_val_44417 === (9))){
var inst_44399 = (state_44416[(9)]);
var inst_44391 = inst_44399;
var state_44416__$1 = (function (){var statearr_44436 = state_44416;
(statearr_44436[(7)] = inst_44391);

return statearr_44436;
})();
var statearr_44437_46443 = state_44416__$1;
(statearr_44437_46443[(2)] = null);

(statearr_44437_46443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (5))){
var inst_44391 = (state_44416[(7)]);
var state_44416__$1 = state_44416;
var statearr_44438_46444 = state_44416__$1;
(statearr_44438_46444[(2)] = inst_44391);

(statearr_44438_46444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (10))){
var inst_44408 = (state_44416[(2)]);
var state_44416__$1 = state_44416;
var statearr_44439_46445 = state_44416__$1;
(statearr_44439_46445[(2)] = inst_44408);

(statearr_44439_46445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44417 === (8))){
var inst_44399 = (state_44416[(9)]);
var inst_44404 = cljs.core.deref(inst_44399);
var state_44416__$1 = state_44416;
var statearr_44440_46446 = state_44416__$1;
(statearr_44440_46446[(2)] = inst_44404);

(statearr_44440_46446[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43736__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43736__auto____0 = (function (){
var statearr_44441 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44441[(0)] = cljs$core$async$reduce_$_state_machine__43736__auto__);

(statearr_44441[(1)] = (1));

return statearr_44441;
});
var cljs$core$async$reduce_$_state_machine__43736__auto____1 = (function (state_44416){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44416);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44442){var ex__43739__auto__ = e44442;
var statearr_44443_46447 = state_44416;
(statearr_44443_46447[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44416[(4)]))){
var statearr_44445_46449 = state_44416;
(statearr_44445_46449[(1)] = cljs.core.first((state_44416[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46453 = state_44416;
state_44416 = G__46453;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43736__auto__ = function(state_44416){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43736__auto____1.call(this,state_44416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43736__auto____0;
cljs$core$async$reduce_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43736__auto____1;
return cljs$core$async$reduce_$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44447 = f__43838__auto__();
(statearr_44447[(6)] = c__43837__auto__);

return statearr_44447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

return c__43837__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44453){
var state_val_44454 = (state_44453[(1)]);
if((state_val_44454 === (1))){
var inst_44448 = cljs.core.async.reduce(f__$1,init,ch);
var state_44453__$1 = state_44453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44453__$1,(2),inst_44448);
} else {
if((state_val_44454 === (2))){
var inst_44450 = (state_44453[(2)]);
var inst_44451 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44450) : f__$1.call(null,inst_44450));
var state_44453__$1 = state_44453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44453__$1,inst_44451);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43736__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43736__auto____0 = (function (){
var statearr_44456 = [null,null,null,null,null,null,null];
(statearr_44456[(0)] = cljs$core$async$transduce_$_state_machine__43736__auto__);

(statearr_44456[(1)] = (1));

return statearr_44456;
});
var cljs$core$async$transduce_$_state_machine__43736__auto____1 = (function (state_44453){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44453);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44457){var ex__43739__auto__ = e44457;
var statearr_44458_46463 = state_44453;
(statearr_44458_46463[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44453[(4)]))){
var statearr_44459_46464 = state_44453;
(statearr_44459_46464[(1)] = cljs.core.first((state_44453[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46467 = state_44453;
state_44453 = G__46467;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43736__auto__ = function(state_44453){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43736__auto____1.call(this,state_44453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43736__auto____0;
cljs$core$async$transduce_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43736__auto____1;
return cljs$core$async$transduce_$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44460 = f__43838__auto__();
(statearr_44460[(6)] = c__43837__auto__);

return statearr_44460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

return c__43837__auto__;
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
var G__44463 = arguments.length;
switch (G__44463) {
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
var c__43837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44496){
var state_val_44497 = (state_44496[(1)]);
if((state_val_44497 === (7))){
var inst_44478 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44500_46486 = state_44496__$1;
(statearr_44500_46486[(2)] = inst_44478);

(statearr_44500_46486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (1))){
var inst_44466 = cljs.core.seq(coll);
var inst_44467 = inst_44466;
var state_44496__$1 = (function (){var statearr_44501 = state_44496;
(statearr_44501[(7)] = inst_44467);

return statearr_44501;
})();
var statearr_44502_46487 = state_44496__$1;
(statearr_44502_46487[(2)] = null);

(statearr_44502_46487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (4))){
var inst_44467 = (state_44496[(7)]);
var inst_44476 = cljs.core.first(inst_44467);
var state_44496__$1 = state_44496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44496__$1,(7),ch,inst_44476);
} else {
if((state_val_44497 === (13))){
var inst_44490 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44503_46488 = state_44496__$1;
(statearr_44503_46488[(2)] = inst_44490);

(statearr_44503_46488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (6))){
var inst_44481 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
if(cljs.core.truth_(inst_44481)){
var statearr_44504_46490 = state_44496__$1;
(statearr_44504_46490[(1)] = (8));

} else {
var statearr_44505_46492 = state_44496__$1;
(statearr_44505_46492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (3))){
var inst_44494 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44496__$1,inst_44494);
} else {
if((state_val_44497 === (12))){
var state_44496__$1 = state_44496;
var statearr_44511_46494 = state_44496__$1;
(statearr_44511_46494[(2)] = null);

(statearr_44511_46494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (2))){
var inst_44467 = (state_44496[(7)]);
var state_44496__$1 = state_44496;
if(cljs.core.truth_(inst_44467)){
var statearr_44513_46495 = state_44496__$1;
(statearr_44513_46495[(1)] = (4));

} else {
var statearr_44514_46496 = state_44496__$1;
(statearr_44514_46496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (11))){
var inst_44487 = cljs.core.async.close_BANG_(ch);
var state_44496__$1 = state_44496;
var statearr_44515_46497 = state_44496__$1;
(statearr_44515_46497[(2)] = inst_44487);

(statearr_44515_46497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (9))){
var state_44496__$1 = state_44496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44522_46498 = state_44496__$1;
(statearr_44522_46498[(1)] = (11));

} else {
var statearr_44523_46499 = state_44496__$1;
(statearr_44523_46499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (5))){
var inst_44467 = (state_44496[(7)]);
var state_44496__$1 = state_44496;
var statearr_44527_46500 = state_44496__$1;
(statearr_44527_46500[(2)] = inst_44467);

(statearr_44527_46500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (10))){
var inst_44492 = (state_44496[(2)]);
var state_44496__$1 = state_44496;
var statearr_44532_46501 = state_44496__$1;
(statearr_44532_46501[(2)] = inst_44492);

(statearr_44532_46501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44497 === (8))){
var inst_44467 = (state_44496[(7)]);
var inst_44483 = cljs.core.next(inst_44467);
var inst_44467__$1 = inst_44483;
var state_44496__$1 = (function (){var statearr_44536 = state_44496;
(statearr_44536[(7)] = inst_44467__$1);

return statearr_44536;
})();
var statearr_44537_46502 = state_44496__$1;
(statearr_44537_46502[(2)] = null);

(statearr_44537_46502[(1)] = (2));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_44539 = [null,null,null,null,null,null,null,null];
(statearr_44539[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_44539[(1)] = (1));

return statearr_44539;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_44496){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44496);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44540){var ex__43739__auto__ = e44540;
var statearr_44541_46509 = state_44496;
(statearr_44541_46509[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44496[(4)]))){
var statearr_44542_46512 = state_44496;
(statearr_44542_46512[(1)] = cljs.core.first((state_44496[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46515 = state_44496;
state_44496 = G__46515;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_44496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_44496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44547 = f__43838__auto__();
(statearr_44547[(6)] = c__43837__auto__);

return statearr_44547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

return c__43837__auto__;
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
var G__44556 = arguments.length;
switch (G__44556) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46517 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46517(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46521 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46521(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46528 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46528(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46532 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46532(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44581 = (function (ch,cs,meta44582){
this.ch = ch;
this.cs = cs;
this.meta44582 = meta44582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44583,meta44582__$1){
var self__ = this;
var _44583__$1 = this;
return (new cljs.core.async.t_cljs$core$async44581(self__.ch,self__.cs,meta44582__$1));
}));

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44583){
var self__ = this;
var _44583__$1 = this;
return self__.meta44582;
}));

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44581.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44582","meta44582",1530256295,null)], null);
}));

(cljs.core.async.t_cljs$core$async44581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44581");

(cljs.core.async.t_cljs$core$async44581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44581.
 */
cljs.core.async.__GT_t_cljs$core$async44581 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44581(ch__$1,cs__$1,meta44582){
return (new cljs.core.async.t_cljs$core$async44581(ch__$1,cs__$1,meta44582));
});

}

return (new cljs.core.async.t_cljs$core$async44581(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43837__auto___46542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_44752){
var state_val_44753 = (state_44752[(1)]);
if((state_val_44753 === (7))){
var inst_44747 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44755_46543 = state_44752__$1;
(statearr_44755_46543[(2)] = inst_44747);

(statearr_44755_46543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (20))){
var inst_44636 = (state_44752[(7)]);
var inst_44649 = cljs.core.first(inst_44636);
var inst_44651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44649,(0),null);
var inst_44652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44649,(1),null);
var state_44752__$1 = (function (){var statearr_44756 = state_44752;
(statearr_44756[(8)] = inst_44651);

return statearr_44756;
})();
if(cljs.core.truth_(inst_44652)){
var statearr_44757_46544 = state_44752__$1;
(statearr_44757_46544[(1)] = (22));

} else {
var statearr_44758_46545 = state_44752__$1;
(statearr_44758_46545[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (27))){
var inst_44600 = (state_44752[(9)]);
var inst_44684 = (state_44752[(10)]);
var inst_44686 = (state_44752[(11)]);
var inst_44691 = (state_44752[(12)]);
var inst_44691__$1 = cljs.core._nth(inst_44684,inst_44686);
var inst_44692 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44691__$1,inst_44600,done);
var state_44752__$1 = (function (){var statearr_44759 = state_44752;
(statearr_44759[(12)] = inst_44691__$1);

return statearr_44759;
})();
if(cljs.core.truth_(inst_44692)){
var statearr_44762_46547 = state_44752__$1;
(statearr_44762_46547[(1)] = (30));

} else {
var statearr_44763_46548 = state_44752__$1;
(statearr_44763_46548[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (1))){
var state_44752__$1 = state_44752;
var statearr_44764_46549 = state_44752__$1;
(statearr_44764_46549[(2)] = null);

(statearr_44764_46549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (24))){
var inst_44636 = (state_44752[(7)]);
var inst_44658 = (state_44752[(2)]);
var inst_44659 = cljs.core.next(inst_44636);
var inst_44609 = inst_44659;
var inst_44610 = null;
var inst_44611 = (0);
var inst_44612 = (0);
var state_44752__$1 = (function (){var statearr_44765 = state_44752;
(statearr_44765[(13)] = inst_44610);

(statearr_44765[(14)] = inst_44612);

(statearr_44765[(15)] = inst_44658);

(statearr_44765[(16)] = inst_44611);

(statearr_44765[(17)] = inst_44609);

return statearr_44765;
})();
var statearr_44769_46550 = state_44752__$1;
(statearr_44769_46550[(2)] = null);

(statearr_44769_46550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (39))){
var state_44752__$1 = state_44752;
var statearr_44777_46551 = state_44752__$1;
(statearr_44777_46551[(2)] = null);

(statearr_44777_46551[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (4))){
var inst_44600 = (state_44752[(9)]);
var inst_44600__$1 = (state_44752[(2)]);
var inst_44601 = (inst_44600__$1 == null);
var state_44752__$1 = (function (){var statearr_44778 = state_44752;
(statearr_44778[(9)] = inst_44600__$1);

return statearr_44778;
})();
if(cljs.core.truth_(inst_44601)){
var statearr_44779_46552 = state_44752__$1;
(statearr_44779_46552[(1)] = (5));

} else {
var statearr_44780_46553 = state_44752__$1;
(statearr_44780_46553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (15))){
var inst_44610 = (state_44752[(13)]);
var inst_44612 = (state_44752[(14)]);
var inst_44611 = (state_44752[(16)]);
var inst_44609 = (state_44752[(17)]);
var inst_44628 = (state_44752[(2)]);
var inst_44631 = (inst_44612 + (1));
var tmp44773 = inst_44610;
var tmp44774 = inst_44611;
var tmp44775 = inst_44609;
var inst_44609__$1 = tmp44775;
var inst_44610__$1 = tmp44773;
var inst_44611__$1 = tmp44774;
var inst_44612__$1 = inst_44631;
var state_44752__$1 = (function (){var statearr_44784 = state_44752;
(statearr_44784[(13)] = inst_44610__$1);

(statearr_44784[(14)] = inst_44612__$1);

(statearr_44784[(16)] = inst_44611__$1);

(statearr_44784[(17)] = inst_44609__$1);

(statearr_44784[(18)] = inst_44628);

return statearr_44784;
})();
var statearr_44788_46559 = state_44752__$1;
(statearr_44788_46559[(2)] = null);

(statearr_44788_46559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (21))){
var inst_44662 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44794_46560 = state_44752__$1;
(statearr_44794_46560[(2)] = inst_44662);

(statearr_44794_46560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (31))){
var inst_44691 = (state_44752[(12)]);
var inst_44695 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44691);
var state_44752__$1 = state_44752;
var statearr_44796_46562 = state_44752__$1;
(statearr_44796_46562[(2)] = inst_44695);

(statearr_44796_46562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (32))){
var inst_44683 = (state_44752[(19)]);
var inst_44684 = (state_44752[(10)]);
var inst_44686 = (state_44752[(11)]);
var inst_44685 = (state_44752[(20)]);
var inst_44697 = (state_44752[(2)]);
var inst_44698 = (inst_44686 + (1));
var tmp44789 = inst_44683;
var tmp44790 = inst_44684;
var tmp44791 = inst_44685;
var inst_44683__$1 = tmp44789;
var inst_44684__$1 = tmp44790;
var inst_44685__$1 = tmp44791;
var inst_44686__$1 = inst_44698;
var state_44752__$1 = (function (){var statearr_44798 = state_44752;
(statearr_44798[(19)] = inst_44683__$1);

(statearr_44798[(10)] = inst_44684__$1);

(statearr_44798[(11)] = inst_44686__$1);

(statearr_44798[(20)] = inst_44685__$1);

(statearr_44798[(21)] = inst_44697);

return statearr_44798;
})();
var statearr_44799_46568 = state_44752__$1;
(statearr_44799_46568[(2)] = null);

(statearr_44799_46568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (40))){
var inst_44718 = (state_44752[(22)]);
var inst_44722 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44718);
var state_44752__$1 = state_44752;
var statearr_44800_46569 = state_44752__$1;
(statearr_44800_46569[(2)] = inst_44722);

(statearr_44800_46569[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (33))){
var inst_44703 = (state_44752[(23)]);
var inst_44708 = cljs.core.chunked_seq_QMARK_(inst_44703);
var state_44752__$1 = state_44752;
if(inst_44708){
var statearr_44801_46573 = state_44752__$1;
(statearr_44801_46573[(1)] = (36));

} else {
var statearr_44802_46576 = state_44752__$1;
(statearr_44802_46576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (13))){
var inst_44622 = (state_44752[(24)]);
var inst_44625 = cljs.core.async.close_BANG_(inst_44622);
var state_44752__$1 = state_44752;
var statearr_44803_46577 = state_44752__$1;
(statearr_44803_46577[(2)] = inst_44625);

(statearr_44803_46577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (22))){
var inst_44651 = (state_44752[(8)]);
var inst_44655 = cljs.core.async.close_BANG_(inst_44651);
var state_44752__$1 = state_44752;
var statearr_44804_46579 = state_44752__$1;
(statearr_44804_46579[(2)] = inst_44655);

(statearr_44804_46579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (36))){
var inst_44703 = (state_44752[(23)]);
var inst_44710 = cljs.core.chunk_first(inst_44703);
var inst_44711 = cljs.core.chunk_rest(inst_44703);
var inst_44712 = cljs.core.count(inst_44710);
var inst_44683 = inst_44711;
var inst_44684 = inst_44710;
var inst_44685 = inst_44712;
var inst_44686 = (0);
var state_44752__$1 = (function (){var statearr_44805 = state_44752;
(statearr_44805[(19)] = inst_44683);

(statearr_44805[(10)] = inst_44684);

(statearr_44805[(11)] = inst_44686);

(statearr_44805[(20)] = inst_44685);

return statearr_44805;
})();
var statearr_44806_46580 = state_44752__$1;
(statearr_44806_46580[(2)] = null);

(statearr_44806_46580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (41))){
var inst_44703 = (state_44752[(23)]);
var inst_44724 = (state_44752[(2)]);
var inst_44725 = cljs.core.next(inst_44703);
var inst_44683 = inst_44725;
var inst_44684 = null;
var inst_44685 = (0);
var inst_44686 = (0);
var state_44752__$1 = (function (){var statearr_44807 = state_44752;
(statearr_44807[(19)] = inst_44683);

(statearr_44807[(10)] = inst_44684);

(statearr_44807[(11)] = inst_44686);

(statearr_44807[(20)] = inst_44685);

(statearr_44807[(25)] = inst_44724);

return statearr_44807;
})();
var statearr_44808_46585 = state_44752__$1;
(statearr_44808_46585[(2)] = null);

(statearr_44808_46585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (43))){
var state_44752__$1 = state_44752;
var statearr_44811_46587 = state_44752__$1;
(statearr_44811_46587[(2)] = null);

(statearr_44811_46587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (29))){
var inst_44734 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44813_46588 = state_44752__$1;
(statearr_44813_46588[(2)] = inst_44734);

(statearr_44813_46588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (44))){
var inst_44744 = (state_44752[(2)]);
var state_44752__$1 = (function (){var statearr_44817 = state_44752;
(statearr_44817[(26)] = inst_44744);

return statearr_44817;
})();
var statearr_44818_46591 = state_44752__$1;
(statearr_44818_46591[(2)] = null);

(statearr_44818_46591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (6))){
var inst_44672 = (state_44752[(27)]);
var inst_44671 = cljs.core.deref(cs);
var inst_44672__$1 = cljs.core.keys(inst_44671);
var inst_44676 = cljs.core.count(inst_44672__$1);
var inst_44677 = cljs.core.reset_BANG_(dctr,inst_44676);
var inst_44682 = cljs.core.seq(inst_44672__$1);
var inst_44683 = inst_44682;
var inst_44684 = null;
var inst_44685 = (0);
var inst_44686 = (0);
var state_44752__$1 = (function (){var statearr_44822 = state_44752;
(statearr_44822[(27)] = inst_44672__$1);

(statearr_44822[(19)] = inst_44683);

(statearr_44822[(10)] = inst_44684);

(statearr_44822[(11)] = inst_44686);

(statearr_44822[(20)] = inst_44685);

(statearr_44822[(28)] = inst_44677);

return statearr_44822;
})();
var statearr_44824_46593 = state_44752__$1;
(statearr_44824_46593[(2)] = null);

(statearr_44824_46593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (28))){
var inst_44683 = (state_44752[(19)]);
var inst_44703 = (state_44752[(23)]);
var inst_44703__$1 = cljs.core.seq(inst_44683);
var state_44752__$1 = (function (){var statearr_44827 = state_44752;
(statearr_44827[(23)] = inst_44703__$1);

return statearr_44827;
})();
if(inst_44703__$1){
var statearr_44829_46598 = state_44752__$1;
(statearr_44829_46598[(1)] = (33));

} else {
var statearr_44830_46600 = state_44752__$1;
(statearr_44830_46600[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (25))){
var inst_44686 = (state_44752[(11)]);
var inst_44685 = (state_44752[(20)]);
var inst_44688 = (inst_44686 < inst_44685);
var inst_44689 = inst_44688;
var state_44752__$1 = state_44752;
if(cljs.core.truth_(inst_44689)){
var statearr_44833_46601 = state_44752__$1;
(statearr_44833_46601[(1)] = (27));

} else {
var statearr_44834_46602 = state_44752__$1;
(statearr_44834_46602[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (34))){
var state_44752__$1 = state_44752;
var statearr_44836_46603 = state_44752__$1;
(statearr_44836_46603[(2)] = null);

(statearr_44836_46603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (17))){
var state_44752__$1 = state_44752;
var statearr_44842_46608 = state_44752__$1;
(statearr_44842_46608[(2)] = null);

(statearr_44842_46608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (3))){
var inst_44749 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44752__$1,inst_44749);
} else {
if((state_val_44753 === (12))){
var inst_44667 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44846_46609 = state_44752__$1;
(statearr_44846_46609[(2)] = inst_44667);

(statearr_44846_46609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (2))){
var state_44752__$1 = state_44752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44752__$1,(4),ch);
} else {
if((state_val_44753 === (23))){
var state_44752__$1 = state_44752;
var statearr_44852_46614 = state_44752__$1;
(statearr_44852_46614[(2)] = null);

(statearr_44852_46614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (35))){
var inst_44732 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44853_46618 = state_44752__$1;
(statearr_44853_46618[(2)] = inst_44732);

(statearr_44853_46618[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (19))){
var inst_44636 = (state_44752[(7)]);
var inst_44640 = cljs.core.chunk_first(inst_44636);
var inst_44641 = cljs.core.chunk_rest(inst_44636);
var inst_44642 = cljs.core.count(inst_44640);
var inst_44609 = inst_44641;
var inst_44610 = inst_44640;
var inst_44611 = inst_44642;
var inst_44612 = (0);
var state_44752__$1 = (function (){var statearr_44857 = state_44752;
(statearr_44857[(13)] = inst_44610);

(statearr_44857[(14)] = inst_44612);

(statearr_44857[(16)] = inst_44611);

(statearr_44857[(17)] = inst_44609);

return statearr_44857;
})();
var statearr_44858_46622 = state_44752__$1;
(statearr_44858_46622[(2)] = null);

(statearr_44858_46622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (11))){
var inst_44636 = (state_44752[(7)]);
var inst_44609 = (state_44752[(17)]);
var inst_44636__$1 = cljs.core.seq(inst_44609);
var state_44752__$1 = (function (){var statearr_44859 = state_44752;
(statearr_44859[(7)] = inst_44636__$1);

return statearr_44859;
})();
if(inst_44636__$1){
var statearr_44860_46624 = state_44752__$1;
(statearr_44860_46624[(1)] = (16));

} else {
var statearr_44861_46626 = state_44752__$1;
(statearr_44861_46626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (9))){
var inst_44669 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44862_46630 = state_44752__$1;
(statearr_44862_46630[(2)] = inst_44669);

(statearr_44862_46630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (5))){
var inst_44607 = cljs.core.deref(cs);
var inst_44608 = cljs.core.seq(inst_44607);
var inst_44609 = inst_44608;
var inst_44610 = null;
var inst_44611 = (0);
var inst_44612 = (0);
var state_44752__$1 = (function (){var statearr_44864 = state_44752;
(statearr_44864[(13)] = inst_44610);

(statearr_44864[(14)] = inst_44612);

(statearr_44864[(16)] = inst_44611);

(statearr_44864[(17)] = inst_44609);

return statearr_44864;
})();
var statearr_44866_46631 = state_44752__$1;
(statearr_44866_46631[(2)] = null);

(statearr_44866_46631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (14))){
var state_44752__$1 = state_44752;
var statearr_44868_46635 = state_44752__$1;
(statearr_44868_46635[(2)] = null);

(statearr_44868_46635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (45))){
var inst_44741 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44869_46636 = state_44752__$1;
(statearr_44869_46636[(2)] = inst_44741);

(statearr_44869_46636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (26))){
var inst_44672 = (state_44752[(27)]);
var inst_44736 = (state_44752[(2)]);
var inst_44738 = cljs.core.seq(inst_44672);
var state_44752__$1 = (function (){var statearr_44870 = state_44752;
(statearr_44870[(29)] = inst_44736);

return statearr_44870;
})();
if(inst_44738){
var statearr_44871_46637 = state_44752__$1;
(statearr_44871_46637[(1)] = (42));

} else {
var statearr_44872_46638 = state_44752__$1;
(statearr_44872_46638[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (16))){
var inst_44636 = (state_44752[(7)]);
var inst_44638 = cljs.core.chunked_seq_QMARK_(inst_44636);
var state_44752__$1 = state_44752;
if(inst_44638){
var statearr_44874_46639 = state_44752__$1;
(statearr_44874_46639[(1)] = (19));

} else {
var statearr_44875_46640 = state_44752__$1;
(statearr_44875_46640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (38))){
var inst_44729 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44877_46644 = state_44752__$1;
(statearr_44877_46644[(2)] = inst_44729);

(statearr_44877_46644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (30))){
var state_44752__$1 = state_44752;
var statearr_44878_46645 = state_44752__$1;
(statearr_44878_46645[(2)] = null);

(statearr_44878_46645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (10))){
var inst_44610 = (state_44752[(13)]);
var inst_44612 = (state_44752[(14)]);
var inst_44620 = cljs.core._nth(inst_44610,inst_44612);
var inst_44622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44620,(0),null);
var inst_44623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44620,(1),null);
var state_44752__$1 = (function (){var statearr_44887 = state_44752;
(statearr_44887[(24)] = inst_44622);

return statearr_44887;
})();
if(cljs.core.truth_(inst_44623)){
var statearr_44888_46646 = state_44752__$1;
(statearr_44888_46646[(1)] = (13));

} else {
var statearr_44889_46647 = state_44752__$1;
(statearr_44889_46647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (18))){
var inst_44665 = (state_44752[(2)]);
var state_44752__$1 = state_44752;
var statearr_44890_46648 = state_44752__$1;
(statearr_44890_46648[(2)] = inst_44665);

(statearr_44890_46648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (42))){
var state_44752__$1 = state_44752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44752__$1,(45),dchan);
} else {
if((state_val_44753 === (37))){
var inst_44600 = (state_44752[(9)]);
var inst_44703 = (state_44752[(23)]);
var inst_44718 = (state_44752[(22)]);
var inst_44718__$1 = cljs.core.first(inst_44703);
var inst_44719 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44718__$1,inst_44600,done);
var state_44752__$1 = (function (){var statearr_44893 = state_44752;
(statearr_44893[(22)] = inst_44718__$1);

return statearr_44893;
})();
if(cljs.core.truth_(inst_44719)){
var statearr_44896_46650 = state_44752__$1;
(statearr_44896_46650[(1)] = (39));

} else {
var statearr_44897_46651 = state_44752__$1;
(statearr_44897_46651[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44753 === (8))){
var inst_44612 = (state_44752[(14)]);
var inst_44611 = (state_44752[(16)]);
var inst_44614 = (inst_44612 < inst_44611);
var inst_44615 = inst_44614;
var state_44752__$1 = state_44752;
if(cljs.core.truth_(inst_44615)){
var statearr_44898_46652 = state_44752__$1;
(statearr_44898_46652[(1)] = (10));

} else {
var statearr_44900_46653 = state_44752__$1;
(statearr_44900_46653[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43736__auto__ = null;
var cljs$core$async$mult_$_state_machine__43736__auto____0 = (function (){
var statearr_44901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44901[(0)] = cljs$core$async$mult_$_state_machine__43736__auto__);

(statearr_44901[(1)] = (1));

return statearr_44901;
});
var cljs$core$async$mult_$_state_machine__43736__auto____1 = (function (state_44752){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_44752);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e44902){var ex__43739__auto__ = e44902;
var statearr_44907_46658 = state_44752;
(statearr_44907_46658[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_44752[(4)]))){
var statearr_44908_46659 = state_44752;
(statearr_44908_46659[(1)] = cljs.core.first((state_44752[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46660 = state_44752;
state_44752 = G__46660;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43736__auto__ = function(state_44752){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43736__auto____1.call(this,state_44752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43736__auto____0;
cljs$core$async$mult_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43736__auto____1;
return cljs$core$async$mult_$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_44920 = f__43838__auto__();
(statearr_44920[(6)] = c__43837__auto___46542);

return statearr_44920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var G__44922 = arguments.length;
switch (G__44922) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46662 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_46662(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46663 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_46663(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46664 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46664(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46680 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_46680(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46691 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46691(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46695 = arguments.length;
var i__4737__auto___46696 = (0);
while(true){
if((i__4737__auto___46696 < len__4736__auto___46695)){
args__4742__auto__.push((arguments[i__4737__auto___46696]));

var G__46697 = (i__4737__auto___46696 + (1));
i__4737__auto___46696 = G__46697;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44961){
var map__44962 = p__44961;
var map__44962__$1 = (((((!((map__44962 == null))))?(((((map__44962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44962):map__44962);
var opts = map__44962__$1;
var statearr_44964_46705 = state;
(statearr_44964_46705[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44965_46706 = state;
(statearr_44965_46706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44966_46707 = state;
(statearr_44966_46707[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44954){
var G__44955 = cljs.core.first(seq44954);
var seq44954__$1 = cljs.core.next(seq44954);
var G__44956 = cljs.core.first(seq44954__$1);
var seq44954__$2 = cljs.core.next(seq44954__$1);
var G__44957 = cljs.core.first(seq44954__$2);
var seq44954__$3 = cljs.core.next(seq44954__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44955,G__44956,G__44957,seq44954__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44975 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44976){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44976 = meta44976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44977,meta44976__$1){
var self__ = this;
var _44977__$1 = this;
return (new cljs.core.async.t_cljs$core$async44975(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44976__$1));
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44977){
var self__ = this;
var _44977__$1 = this;
return self__.meta44976;
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44975.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44976","meta44976",-1175355574,null)], null);
}));

(cljs.core.async.t_cljs$core$async44975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44975");

(cljs.core.async.t_cljs$core$async44975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44975.
 */
cljs.core.async.__GT_t_cljs$core$async44975 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44975(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44976){
return (new cljs.core.async.t_cljs$core$async44975(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44976));
});

}

return (new cljs.core.async.t_cljs$core$async44975(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43837__auto___46710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45080){
var state_val_45081 = (state_45080[(1)]);
if((state_val_45081 === (7))){
var inst_44995 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45092_46711 = state_45080__$1;
(statearr_45092_46711[(2)] = inst_44995);

(statearr_45092_46711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (20))){
var inst_45007 = (state_45080[(7)]);
var state_45080__$1 = state_45080;
var statearr_45100_46712 = state_45080__$1;
(statearr_45100_46712[(2)] = inst_45007);

(statearr_45100_46712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (27))){
var state_45080__$1 = state_45080;
var statearr_45112_46713 = state_45080__$1;
(statearr_45112_46713[(2)] = null);

(statearr_45112_46713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (1))){
var inst_44982 = (state_45080[(8)]);
var inst_44982__$1 = calc_state();
var inst_44984 = (inst_44982__$1 == null);
var inst_44985 = cljs.core.not(inst_44984);
var state_45080__$1 = (function (){var statearr_45124 = state_45080;
(statearr_45124[(8)] = inst_44982__$1);

return statearr_45124;
})();
if(inst_44985){
var statearr_45132_46714 = state_45080__$1;
(statearr_45132_46714[(1)] = (2));

} else {
var statearr_45133_46715 = state_45080__$1;
(statearr_45133_46715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (24))){
var inst_45031 = (state_45080[(9)]);
var inst_45040 = (state_45080[(10)]);
var inst_45054 = (state_45080[(11)]);
var inst_45054__$1 = (inst_45031.cljs$core$IFn$_invoke$arity$1 ? inst_45031.cljs$core$IFn$_invoke$arity$1(inst_45040) : inst_45031.call(null,inst_45040));
var state_45080__$1 = (function (){var statearr_45134 = state_45080;
(statearr_45134[(11)] = inst_45054__$1);

return statearr_45134;
})();
if(cljs.core.truth_(inst_45054__$1)){
var statearr_45135_46716 = state_45080__$1;
(statearr_45135_46716[(1)] = (29));

} else {
var statearr_45136_46721 = state_45080__$1;
(statearr_45136_46721[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (4))){
var inst_44998 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_44998)){
var statearr_45138_46722 = state_45080__$1;
(statearr_45138_46722[(1)] = (8));

} else {
var statearr_45139_46723 = state_45080__$1;
(statearr_45139_46723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (15))){
var inst_45025 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45025)){
var statearr_45140_46724 = state_45080__$1;
(statearr_45140_46724[(1)] = (19));

} else {
var statearr_45141_46725 = state_45080__$1;
(statearr_45141_46725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (21))){
var inst_45030 = (state_45080[(12)]);
var inst_45030__$1 = (state_45080[(2)]);
var inst_45031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45080__$1 = (function (){var statearr_45142 = state_45080;
(statearr_45142[(13)] = inst_45032);

(statearr_45142[(9)] = inst_45031);

(statearr_45142[(12)] = inst_45030__$1);

return statearr_45142;
})();
return cljs.core.async.ioc_alts_BANG_(state_45080__$1,(22),inst_45033);
} else {
if((state_val_45081 === (31))){
var inst_45062 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45062)){
var statearr_45144_46726 = state_45080__$1;
(statearr_45144_46726[(1)] = (32));

} else {
var statearr_45145_46727 = state_45080__$1;
(statearr_45145_46727[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (32))){
var inst_45039 = (state_45080[(14)]);
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45080__$1,(35),out,inst_45039);
} else {
if((state_val_45081 === (33))){
var inst_45030 = (state_45080[(12)]);
var inst_45007 = inst_45030;
var state_45080__$1 = (function (){var statearr_45146 = state_45080;
(statearr_45146[(7)] = inst_45007);

return statearr_45146;
})();
var statearr_45147_46728 = state_45080__$1;
(statearr_45147_46728[(2)] = null);

(statearr_45147_46728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (13))){
var inst_45007 = (state_45080[(7)]);
var inst_45014 = inst_45007.cljs$lang$protocol_mask$partition0$;
var inst_45015 = (inst_45014 & (64));
var inst_45016 = inst_45007.cljs$core$ISeq$;
var inst_45017 = (cljs.core.PROTOCOL_SENTINEL === inst_45016);
var inst_45018 = ((inst_45015) || (inst_45017));
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45018)){
var statearr_45148_46733 = state_45080__$1;
(statearr_45148_46733[(1)] = (16));

} else {
var statearr_45149_46734 = state_45080__$1;
(statearr_45149_46734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (22))){
var inst_45040 = (state_45080[(10)]);
var inst_45039 = (state_45080[(14)]);
var inst_45038 = (state_45080[(2)]);
var inst_45039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45038,(0),null);
var inst_45040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45038,(1),null);
var inst_45041 = (inst_45039__$1 == null);
var inst_45042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45040__$1,change);
var inst_45043 = ((inst_45041) || (inst_45042));
var state_45080__$1 = (function (){var statearr_45150 = state_45080;
(statearr_45150[(10)] = inst_45040__$1);

(statearr_45150[(14)] = inst_45039__$1);

return statearr_45150;
})();
if(cljs.core.truth_(inst_45043)){
var statearr_45151_46743 = state_45080__$1;
(statearr_45151_46743[(1)] = (23));

} else {
var statearr_45152_46744 = state_45080__$1;
(statearr_45152_46744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (36))){
var inst_45030 = (state_45080[(12)]);
var inst_45007 = inst_45030;
var state_45080__$1 = (function (){var statearr_45153 = state_45080;
(statearr_45153[(7)] = inst_45007);

return statearr_45153;
})();
var statearr_45154_46748 = state_45080__$1;
(statearr_45154_46748[(2)] = null);

(statearr_45154_46748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (29))){
var inst_45054 = (state_45080[(11)]);
var state_45080__$1 = state_45080;
var statearr_45155_46749 = state_45080__$1;
(statearr_45155_46749[(2)] = inst_45054);

(statearr_45155_46749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (6))){
var state_45080__$1 = state_45080;
var statearr_45156_46751 = state_45080__$1;
(statearr_45156_46751[(2)] = false);

(statearr_45156_46751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (28))){
var inst_45050 = (state_45080[(2)]);
var inst_45051 = calc_state();
var inst_45007 = inst_45051;
var state_45080__$1 = (function (){var statearr_45157 = state_45080;
(statearr_45157[(7)] = inst_45007);

(statearr_45157[(15)] = inst_45050);

return statearr_45157;
})();
var statearr_45158_46753 = state_45080__$1;
(statearr_45158_46753[(2)] = null);

(statearr_45158_46753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (25))){
var inst_45076 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45159_46756 = state_45080__$1;
(statearr_45159_46756[(2)] = inst_45076);

(statearr_45159_46756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (34))){
var inst_45074 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45160_46757 = state_45080__$1;
(statearr_45160_46757[(2)] = inst_45074);

(statearr_45160_46757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (17))){
var state_45080__$1 = state_45080;
var statearr_45161_46759 = state_45080__$1;
(statearr_45161_46759[(2)] = false);

(statearr_45161_46759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (3))){
var state_45080__$1 = state_45080;
var statearr_45162_46762 = state_45080__$1;
(statearr_45162_46762[(2)] = false);

(statearr_45162_46762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (12))){
var inst_45078 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45080__$1,inst_45078);
} else {
if((state_val_45081 === (2))){
var inst_44982 = (state_45080[(8)]);
var inst_44987 = inst_44982.cljs$lang$protocol_mask$partition0$;
var inst_44988 = (inst_44987 & (64));
var inst_44989 = inst_44982.cljs$core$ISeq$;
var inst_44990 = (cljs.core.PROTOCOL_SENTINEL === inst_44989);
var inst_44991 = ((inst_44988) || (inst_44990));
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_44991)){
var statearr_45163_46763 = state_45080__$1;
(statearr_45163_46763[(1)] = (5));

} else {
var statearr_45164_46764 = state_45080__$1;
(statearr_45164_46764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (23))){
var inst_45039 = (state_45080[(14)]);
var inst_45045 = (inst_45039 == null);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45045)){
var statearr_45165_46767 = state_45080__$1;
(statearr_45165_46767[(1)] = (26));

} else {
var statearr_45166_46768 = state_45080__$1;
(statearr_45166_46768[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (35))){
var inst_45065 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
if(cljs.core.truth_(inst_45065)){
var statearr_45167_46769 = state_45080__$1;
(statearr_45167_46769[(1)] = (36));

} else {
var statearr_45168_46770 = state_45080__$1;
(statearr_45168_46770[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (19))){
var inst_45007 = (state_45080[(7)]);
var inst_45027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45007);
var state_45080__$1 = state_45080;
var statearr_45169_46776 = state_45080__$1;
(statearr_45169_46776[(2)] = inst_45027);

(statearr_45169_46776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (11))){
var inst_45007 = (state_45080[(7)]);
var inst_45011 = (inst_45007 == null);
var inst_45012 = cljs.core.not(inst_45011);
var state_45080__$1 = state_45080;
if(inst_45012){
var statearr_45170_46779 = state_45080__$1;
(statearr_45170_46779[(1)] = (13));

} else {
var statearr_45171_46780 = state_45080__$1;
(statearr_45171_46780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (9))){
var inst_44982 = (state_45080[(8)]);
var state_45080__$1 = state_45080;
var statearr_45172_46781 = state_45080__$1;
(statearr_45172_46781[(2)] = inst_44982);

(statearr_45172_46781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (5))){
var state_45080__$1 = state_45080;
var statearr_45173_46782 = state_45080__$1;
(statearr_45173_46782[(2)] = true);

(statearr_45173_46782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (14))){
var state_45080__$1 = state_45080;
var statearr_45174_46783 = state_45080__$1;
(statearr_45174_46783[(2)] = false);

(statearr_45174_46783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (26))){
var inst_45040 = (state_45080[(10)]);
var inst_45047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45040);
var state_45080__$1 = state_45080;
var statearr_45175_46784 = state_45080__$1;
(statearr_45175_46784[(2)] = inst_45047);

(statearr_45175_46784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (16))){
var state_45080__$1 = state_45080;
var statearr_45176_46785 = state_45080__$1;
(statearr_45176_46785[(2)] = true);

(statearr_45176_46785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (38))){
var inst_45070 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45177_46786 = state_45080__$1;
(statearr_45177_46786[(2)] = inst_45070);

(statearr_45177_46786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (30))){
var inst_45032 = (state_45080[(13)]);
var inst_45031 = (state_45080[(9)]);
var inst_45040 = (state_45080[(10)]);
var inst_45057 = cljs.core.empty_QMARK_(inst_45031);
var inst_45058 = (inst_45032.cljs$core$IFn$_invoke$arity$1 ? inst_45032.cljs$core$IFn$_invoke$arity$1(inst_45040) : inst_45032.call(null,inst_45040));
var inst_45059 = cljs.core.not(inst_45058);
var inst_45060 = ((inst_45057) && (inst_45059));
var state_45080__$1 = state_45080;
var statearr_45178_46792 = state_45080__$1;
(statearr_45178_46792[(2)] = inst_45060);

(statearr_45178_46792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (10))){
var inst_44982 = (state_45080[(8)]);
var inst_45003 = (state_45080[(2)]);
var inst_45004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45003,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45003,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45003,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45007 = inst_44982;
var state_45080__$1 = (function (){var statearr_45179 = state_45080;
(statearr_45179[(16)] = inst_45005);

(statearr_45179[(17)] = inst_45004);

(statearr_45179[(7)] = inst_45007);

(statearr_45179[(18)] = inst_45006);

return statearr_45179;
})();
var statearr_45180_46794 = state_45080__$1;
(statearr_45180_46794[(2)] = null);

(statearr_45180_46794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (18))){
var inst_45022 = (state_45080[(2)]);
var state_45080__$1 = state_45080;
var statearr_45181_46795 = state_45080__$1;
(statearr_45181_46795[(2)] = inst_45022);

(statearr_45181_46795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (37))){
var state_45080__$1 = state_45080;
var statearr_45182_46797 = state_45080__$1;
(statearr_45182_46797[(2)] = null);

(statearr_45182_46797[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45081 === (8))){
var inst_44982 = (state_45080[(8)]);
var inst_45000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44982);
var state_45080__$1 = state_45080;
var statearr_45183_46798 = state_45080__$1;
(statearr_45183_46798[(2)] = inst_45000);

(statearr_45183_46798[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__43736__auto__ = null;
var cljs$core$async$mix_$_state_machine__43736__auto____0 = (function (){
var statearr_45184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45184[(0)] = cljs$core$async$mix_$_state_machine__43736__auto__);

(statearr_45184[(1)] = (1));

return statearr_45184;
});
var cljs$core$async$mix_$_state_machine__43736__auto____1 = (function (state_45080){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45080);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45185){var ex__43739__auto__ = e45185;
var statearr_45186_46802 = state_45080;
(statearr_45186_46802[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45080[(4)]))){
var statearr_45187_46803 = state_45080;
(statearr_45187_46803[(1)] = cljs.core.first((state_45080[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46804 = state_45080;
state_45080 = G__46804;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43736__auto__ = function(state_45080){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43736__auto____1.call(this,state_45080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43736__auto____0;
cljs$core$async$mix_$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43736__auto____1;
return cljs$core$async$mix_$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45188 = f__43838__auto__();
(statearr_45188[(6)] = c__43837__auto___46710);

return statearr_45188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_46808 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_46808(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46814 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_46814(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46816 = (function() {
var G__46817 = null;
var G__46817__1 = (function (p){
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
var G__46817__2 = (function (p,v){
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
G__46817 = function(p,v){
switch(arguments.length){
case 1:
return G__46817__1.call(this,p);
case 2:
return G__46817__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46817.cljs$core$IFn$_invoke$arity$1 = G__46817__1;
G__46817.cljs$core$IFn$_invoke$arity$2 = G__46817__2;
return G__46817;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45190 = arguments.length;
switch (G__45190) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46816(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46816(p,v);
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
var G__45193 = arguments.length;
switch (G__45193) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45191_SHARP_){
if(cljs.core.truth_((p1__45191_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45191_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45191_SHARP_.call(null,topic)))){
return p1__45191_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45191_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45198 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45199){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45199 = meta45199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45200,meta45199__$1){
var self__ = this;
var _45200__$1 = this;
return (new cljs.core.async.t_cljs$core$async45198(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45199__$1));
}));

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45200){
var self__ = this;
var _45200__$1 = this;
return self__.meta45199;
}));

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45199","meta45199",1541849713,null)], null);
}));

(cljs.core.async.t_cljs$core$async45198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45198");

(cljs.core.async.t_cljs$core$async45198.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45198.
 */
cljs.core.async.__GT_t_cljs$core$async45198 = (function cljs$core$async$__GT_t_cljs$core$async45198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45199){
return (new cljs.core.async.t_cljs$core$async45198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45199));
});

}

return (new cljs.core.async.t_cljs$core$async45198(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43837__auto___46825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45278){
var state_val_45279 = (state_45278[(1)]);
if((state_val_45279 === (7))){
var inst_45274 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45282_46826 = state_45278__$1;
(statearr_45282_46826[(2)] = inst_45274);

(statearr_45282_46826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (20))){
var state_45278__$1 = state_45278;
var statearr_45284_46827 = state_45278__$1;
(statearr_45284_46827[(2)] = null);

(statearr_45284_46827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (1))){
var state_45278__$1 = state_45278;
var statearr_45285_46828 = state_45278__$1;
(statearr_45285_46828[(2)] = null);

(statearr_45285_46828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (24))){
var inst_45256 = (state_45278[(7)]);
var inst_45266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45256);
var state_45278__$1 = state_45278;
var statearr_45287_46829 = state_45278__$1;
(statearr_45287_46829[(2)] = inst_45266);

(statearr_45287_46829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (4))){
var inst_45207 = (state_45278[(8)]);
var inst_45207__$1 = (state_45278[(2)]);
var inst_45208 = (inst_45207__$1 == null);
var state_45278__$1 = (function (){var statearr_45288 = state_45278;
(statearr_45288[(8)] = inst_45207__$1);

return statearr_45288;
})();
if(cljs.core.truth_(inst_45208)){
var statearr_45289_46833 = state_45278__$1;
(statearr_45289_46833[(1)] = (5));

} else {
var statearr_45290_46834 = state_45278__$1;
(statearr_45290_46834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (15))){
var inst_45250 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45292_46835 = state_45278__$1;
(statearr_45292_46835[(2)] = inst_45250);

(statearr_45292_46835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (21))){
var inst_45271 = (state_45278[(2)]);
var state_45278__$1 = (function (){var statearr_45293 = state_45278;
(statearr_45293[(9)] = inst_45271);

return statearr_45293;
})();
var statearr_45294_46836 = state_45278__$1;
(statearr_45294_46836[(2)] = null);

(statearr_45294_46836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (13))){
var inst_45232 = (state_45278[(10)]);
var inst_45234 = cljs.core.chunked_seq_QMARK_(inst_45232);
var state_45278__$1 = state_45278;
if(inst_45234){
var statearr_45295_46837 = state_45278__$1;
(statearr_45295_46837[(1)] = (16));

} else {
var statearr_45296_46838 = state_45278__$1;
(statearr_45296_46838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (22))){
var inst_45263 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
if(cljs.core.truth_(inst_45263)){
var statearr_45297_46839 = state_45278__$1;
(statearr_45297_46839[(1)] = (23));

} else {
var statearr_45298_46840 = state_45278__$1;
(statearr_45298_46840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (6))){
var inst_45207 = (state_45278[(8)]);
var inst_45258 = (state_45278[(11)]);
var inst_45256 = (state_45278[(7)]);
var inst_45256__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45207) : topic_fn.call(null,inst_45207));
var inst_45257 = cljs.core.deref(mults);
var inst_45258__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45257,inst_45256__$1);
var state_45278__$1 = (function (){var statearr_45299 = state_45278;
(statearr_45299[(11)] = inst_45258__$1);

(statearr_45299[(7)] = inst_45256__$1);

return statearr_45299;
})();
if(cljs.core.truth_(inst_45258__$1)){
var statearr_45300_46841 = state_45278__$1;
(statearr_45300_46841[(1)] = (19));

} else {
var statearr_45301_46842 = state_45278__$1;
(statearr_45301_46842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (25))){
var inst_45268 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45302_46843 = state_45278__$1;
(statearr_45302_46843[(2)] = inst_45268);

(statearr_45302_46843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (17))){
var inst_45232 = (state_45278[(10)]);
var inst_45241 = cljs.core.first(inst_45232);
var inst_45242 = cljs.core.async.muxch_STAR_(inst_45241);
var inst_45243 = cljs.core.async.close_BANG_(inst_45242);
var inst_45244 = cljs.core.next(inst_45232);
var inst_45217 = inst_45244;
var inst_45218 = null;
var inst_45219 = (0);
var inst_45220 = (0);
var state_45278__$1 = (function (){var statearr_45303 = state_45278;
(statearr_45303[(12)] = inst_45220);

(statearr_45303[(13)] = inst_45217);

(statearr_45303[(14)] = inst_45219);

(statearr_45303[(15)] = inst_45218);

(statearr_45303[(16)] = inst_45243);

return statearr_45303;
})();
var statearr_45304_46845 = state_45278__$1;
(statearr_45304_46845[(2)] = null);

(statearr_45304_46845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (3))){
var inst_45276 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45278__$1,inst_45276);
} else {
if((state_val_45279 === (12))){
var inst_45252 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45305_46846 = state_45278__$1;
(statearr_45305_46846[(2)] = inst_45252);

(statearr_45305_46846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (2))){
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45278__$1,(4),ch);
} else {
if((state_val_45279 === (23))){
var state_45278__$1 = state_45278;
var statearr_45306_46847 = state_45278__$1;
(statearr_45306_46847[(2)] = null);

(statearr_45306_46847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (19))){
var inst_45207 = (state_45278[(8)]);
var inst_45258 = (state_45278[(11)]);
var inst_45261 = cljs.core.async.muxch_STAR_(inst_45258);
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45278__$1,(22),inst_45261,inst_45207);
} else {
if((state_val_45279 === (11))){
var inst_45217 = (state_45278[(13)]);
var inst_45232 = (state_45278[(10)]);
var inst_45232__$1 = cljs.core.seq(inst_45217);
var state_45278__$1 = (function (){var statearr_45307 = state_45278;
(statearr_45307[(10)] = inst_45232__$1);

return statearr_45307;
})();
if(inst_45232__$1){
var statearr_45308_46848 = state_45278__$1;
(statearr_45308_46848[(1)] = (13));

} else {
var statearr_45309_46849 = state_45278__$1;
(statearr_45309_46849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (9))){
var inst_45254 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45310_46850 = state_45278__$1;
(statearr_45310_46850[(2)] = inst_45254);

(statearr_45310_46850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (5))){
var inst_45214 = cljs.core.deref(mults);
var inst_45215 = cljs.core.vals(inst_45214);
var inst_45216 = cljs.core.seq(inst_45215);
var inst_45217 = inst_45216;
var inst_45218 = null;
var inst_45219 = (0);
var inst_45220 = (0);
var state_45278__$1 = (function (){var statearr_45311 = state_45278;
(statearr_45311[(12)] = inst_45220);

(statearr_45311[(13)] = inst_45217);

(statearr_45311[(14)] = inst_45219);

(statearr_45311[(15)] = inst_45218);

return statearr_45311;
})();
var statearr_45312_46851 = state_45278__$1;
(statearr_45312_46851[(2)] = null);

(statearr_45312_46851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (14))){
var state_45278__$1 = state_45278;
var statearr_45320_46852 = state_45278__$1;
(statearr_45320_46852[(2)] = null);

(statearr_45320_46852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (16))){
var inst_45232 = (state_45278[(10)]);
var inst_45236 = cljs.core.chunk_first(inst_45232);
var inst_45237 = cljs.core.chunk_rest(inst_45232);
var inst_45238 = cljs.core.count(inst_45236);
var inst_45217 = inst_45237;
var inst_45218 = inst_45236;
var inst_45219 = inst_45238;
var inst_45220 = (0);
var state_45278__$1 = (function (){var statearr_45321 = state_45278;
(statearr_45321[(12)] = inst_45220);

(statearr_45321[(13)] = inst_45217);

(statearr_45321[(14)] = inst_45219);

(statearr_45321[(15)] = inst_45218);

return statearr_45321;
})();
var statearr_45322_46853 = state_45278__$1;
(statearr_45322_46853[(2)] = null);

(statearr_45322_46853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (10))){
var inst_45220 = (state_45278[(12)]);
var inst_45217 = (state_45278[(13)]);
var inst_45219 = (state_45278[(14)]);
var inst_45218 = (state_45278[(15)]);
var inst_45225 = cljs.core._nth(inst_45218,inst_45220);
var inst_45226 = cljs.core.async.muxch_STAR_(inst_45225);
var inst_45227 = cljs.core.async.close_BANG_(inst_45226);
var inst_45228 = (inst_45220 + (1));
var tmp45317 = inst_45217;
var tmp45318 = inst_45219;
var tmp45319 = inst_45218;
var inst_45217__$1 = tmp45317;
var inst_45218__$1 = tmp45319;
var inst_45219__$1 = tmp45318;
var inst_45220__$1 = inst_45228;
var state_45278__$1 = (function (){var statearr_45323 = state_45278;
(statearr_45323[(12)] = inst_45220__$1);

(statearr_45323[(17)] = inst_45227);

(statearr_45323[(13)] = inst_45217__$1);

(statearr_45323[(14)] = inst_45219__$1);

(statearr_45323[(15)] = inst_45218__$1);

return statearr_45323;
})();
var statearr_45324_46854 = state_45278__$1;
(statearr_45324_46854[(2)] = null);

(statearr_45324_46854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (18))){
var inst_45247 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45325_46855 = state_45278__$1;
(statearr_45325_46855[(2)] = inst_45247);

(statearr_45325_46855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (8))){
var inst_45220 = (state_45278[(12)]);
var inst_45219 = (state_45278[(14)]);
var inst_45222 = (inst_45220 < inst_45219);
var inst_45223 = inst_45222;
var state_45278__$1 = state_45278;
if(cljs.core.truth_(inst_45223)){
var statearr_45326_46860 = state_45278__$1;
(statearr_45326_46860[(1)] = (10));

} else {
var statearr_45327_46861 = state_45278__$1;
(statearr_45327_46861[(1)] = (11));

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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45328[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45328[(1)] = (1));

return statearr_45328;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45278){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45278);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45329){var ex__43739__auto__ = e45329;
var statearr_45330_46866 = state_45278;
(statearr_45330_46866[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45278[(4)]))){
var statearr_45331_46867 = state_45278;
(statearr_45331_46867[(1)] = cljs.core.first((state_45278[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46868 = state_45278;
state_45278 = G__46868;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45332 = f__43838__auto__();
(statearr_45332[(6)] = c__43837__auto___46825);

return statearr_45332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var G__45334 = arguments.length;
switch (G__45334) {
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
var G__45340 = arguments.length;
switch (G__45340) {
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
var G__45342 = arguments.length;
switch (G__45342) {
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
var c__43837__auto___46874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45389){
var state_val_45390 = (state_45389[(1)]);
if((state_val_45390 === (7))){
var state_45389__$1 = state_45389;
var statearr_45391_46875 = state_45389__$1;
(statearr_45391_46875[(2)] = null);

(statearr_45391_46875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (1))){
var state_45389__$1 = state_45389;
var statearr_45392_46876 = state_45389__$1;
(statearr_45392_46876[(2)] = null);

(statearr_45392_46876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (4))){
var inst_45345 = (state_45389[(7)]);
var inst_45346 = (state_45389[(8)]);
var inst_45348 = (inst_45346 < inst_45345);
var state_45389__$1 = state_45389;
if(cljs.core.truth_(inst_45348)){
var statearr_45393_46877 = state_45389__$1;
(statearr_45393_46877[(1)] = (6));

} else {
var statearr_45394_46878 = state_45389__$1;
(statearr_45394_46878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (15))){
var inst_45375 = (state_45389[(9)]);
var inst_45380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45375);
var state_45389__$1 = state_45389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45389__$1,(17),out,inst_45380);
} else {
if((state_val_45390 === (13))){
var inst_45375 = (state_45389[(9)]);
var inst_45375__$1 = (state_45389[(2)]);
var inst_45376 = cljs.core.some(cljs.core.nil_QMARK_,inst_45375__$1);
var state_45389__$1 = (function (){var statearr_45395 = state_45389;
(statearr_45395[(9)] = inst_45375__$1);

return statearr_45395;
})();
if(cljs.core.truth_(inst_45376)){
var statearr_45396_46879 = state_45389__$1;
(statearr_45396_46879[(1)] = (14));

} else {
var statearr_45397_46880 = state_45389__$1;
(statearr_45397_46880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (6))){
var state_45389__$1 = state_45389;
var statearr_45398_46881 = state_45389__$1;
(statearr_45398_46881[(2)] = null);

(statearr_45398_46881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (17))){
var inst_45382 = (state_45389[(2)]);
var state_45389__$1 = (function (){var statearr_45400 = state_45389;
(statearr_45400[(10)] = inst_45382);

return statearr_45400;
})();
var statearr_45401_46882 = state_45389__$1;
(statearr_45401_46882[(2)] = null);

(statearr_45401_46882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (3))){
var inst_45387 = (state_45389[(2)]);
var state_45389__$1 = state_45389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45389__$1,inst_45387);
} else {
if((state_val_45390 === (12))){
var _ = (function (){var statearr_45402 = state_45389;
(statearr_45402[(4)] = cljs.core.rest((state_45389[(4)])));

return statearr_45402;
})();
var state_45389__$1 = state_45389;
var ex45399 = (state_45389__$1[(2)]);
var statearr_45403_46883 = state_45389__$1;
(statearr_45403_46883[(5)] = ex45399);


if((ex45399 instanceof Object)){
var statearr_45405_46884 = state_45389__$1;
(statearr_45405_46884[(1)] = (11));

(statearr_45405_46884[(5)] = null);

} else {
throw ex45399;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (2))){
var inst_45344 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45345 = cnt;
var inst_45346 = (0);
var state_45389__$1 = (function (){var statearr_45406 = state_45389;
(statearr_45406[(7)] = inst_45345);

(statearr_45406[(11)] = inst_45344);

(statearr_45406[(8)] = inst_45346);

return statearr_45406;
})();
var statearr_45407_46885 = state_45389__$1;
(statearr_45407_46885[(2)] = null);

(statearr_45407_46885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (11))){
var inst_45354 = (state_45389[(2)]);
var inst_45355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45389__$1 = (function (){var statearr_45408 = state_45389;
(statearr_45408[(12)] = inst_45354);

return statearr_45408;
})();
var statearr_45409_46886 = state_45389__$1;
(statearr_45409_46886[(2)] = inst_45355);

(statearr_45409_46886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (9))){
var inst_45346 = (state_45389[(8)]);
var _ = (function (){var statearr_45413 = state_45389;
(statearr_45413[(4)] = cljs.core.cons((12),(state_45389[(4)])));

return statearr_45413;
})();
var inst_45361 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45346) : chs__$1.call(null,inst_45346));
var inst_45362 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45346) : done.call(null,inst_45346));
var inst_45363 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45361,inst_45362);
var ___$1 = (function (){var statearr_45414 = state_45389;
(statearr_45414[(4)] = cljs.core.rest((state_45389[(4)])));

return statearr_45414;
})();
var state_45389__$1 = state_45389;
var statearr_45415_46887 = state_45389__$1;
(statearr_45415_46887[(2)] = inst_45363);

(statearr_45415_46887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (5))){
var inst_45373 = (state_45389[(2)]);
var state_45389__$1 = (function (){var statearr_45416 = state_45389;
(statearr_45416[(13)] = inst_45373);

return statearr_45416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45389__$1,(13),dchan);
} else {
if((state_val_45390 === (14))){
var inst_45378 = cljs.core.async.close_BANG_(out);
var state_45389__$1 = state_45389;
var statearr_45417_46888 = state_45389__$1;
(statearr_45417_46888[(2)] = inst_45378);

(statearr_45417_46888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (16))){
var inst_45385 = (state_45389[(2)]);
var state_45389__$1 = state_45389;
var statearr_45418_46889 = state_45389__$1;
(statearr_45418_46889[(2)] = inst_45385);

(statearr_45418_46889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (10))){
var inst_45346 = (state_45389[(8)]);
var inst_45366 = (state_45389[(2)]);
var inst_45367 = (inst_45346 + (1));
var inst_45346__$1 = inst_45367;
var state_45389__$1 = (function (){var statearr_45419 = state_45389;
(statearr_45419[(14)] = inst_45366);

(statearr_45419[(8)] = inst_45346__$1);

return statearr_45419;
})();
var statearr_45420_46893 = state_45389__$1;
(statearr_45420_46893[(2)] = null);

(statearr_45420_46893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45390 === (8))){
var inst_45371 = (state_45389[(2)]);
var state_45389__$1 = state_45389;
var statearr_45421_46894 = state_45389__$1;
(statearr_45421_46894[(2)] = inst_45371);

(statearr_45421_46894[(1)] = (5));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45422[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45422[(1)] = (1));

return statearr_45422;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45389){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45389);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45424){var ex__43739__auto__ = e45424;
var statearr_45425_46902 = state_45389;
(statearr_45425_46902[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45389[(4)]))){
var statearr_45427_46903 = state_45389;
(statearr_45427_46903[(1)] = cljs.core.first((state_45389[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46904 = state_45389;
state_45389 = G__46904;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45432 = f__43838__auto__();
(statearr_45432[(6)] = c__43837__auto___46874);

return statearr_45432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var G__45441 = arguments.length;
switch (G__45441) {
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
var c__43837__auto___46909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45479){
var state_val_45480 = (state_45479[(1)]);
if((state_val_45480 === (7))){
var inst_45458 = (state_45479[(7)]);
var inst_45459 = (state_45479[(8)]);
var inst_45458__$1 = (state_45479[(2)]);
var inst_45459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45458__$1,(0),null);
var inst_45460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45458__$1,(1),null);
var inst_45461 = (inst_45459__$1 == null);
var state_45479__$1 = (function (){var statearr_45481 = state_45479;
(statearr_45481[(9)] = inst_45460);

(statearr_45481[(7)] = inst_45458__$1);

(statearr_45481[(8)] = inst_45459__$1);

return statearr_45481;
})();
if(cljs.core.truth_(inst_45461)){
var statearr_45482_46913 = state_45479__$1;
(statearr_45482_46913[(1)] = (8));

} else {
var statearr_45484_46914 = state_45479__$1;
(statearr_45484_46914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (1))){
var inst_45445 = cljs.core.vec(chs);
var inst_45446 = inst_45445;
var state_45479__$1 = (function (){var statearr_45486 = state_45479;
(statearr_45486[(10)] = inst_45446);

return statearr_45486;
})();
var statearr_45487_46915 = state_45479__$1;
(statearr_45487_46915[(2)] = null);

(statearr_45487_46915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (4))){
var inst_45446 = (state_45479[(10)]);
var state_45479__$1 = state_45479;
return cljs.core.async.ioc_alts_BANG_(state_45479__$1,(7),inst_45446);
} else {
if((state_val_45480 === (6))){
var inst_45475 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45488_46919 = state_45479__$1;
(statearr_45488_46919[(2)] = inst_45475);

(statearr_45488_46919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (3))){
var inst_45477 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45479__$1,inst_45477);
} else {
if((state_val_45480 === (2))){
var inst_45446 = (state_45479[(10)]);
var inst_45451 = cljs.core.count(inst_45446);
var inst_45452 = (inst_45451 > (0));
var state_45479__$1 = state_45479;
if(cljs.core.truth_(inst_45452)){
var statearr_45493_46920 = state_45479__$1;
(statearr_45493_46920[(1)] = (4));

} else {
var statearr_45494_46921 = state_45479__$1;
(statearr_45494_46921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (11))){
var inst_45446 = (state_45479[(10)]);
var inst_45468 = (state_45479[(2)]);
var tmp45489 = inst_45446;
var inst_45446__$1 = tmp45489;
var state_45479__$1 = (function (){var statearr_45495 = state_45479;
(statearr_45495[(11)] = inst_45468);

(statearr_45495[(10)] = inst_45446__$1);

return statearr_45495;
})();
var statearr_45496_46923 = state_45479__$1;
(statearr_45496_46923[(2)] = null);

(statearr_45496_46923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (9))){
var inst_45459 = (state_45479[(8)]);
var state_45479__$1 = state_45479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45479__$1,(11),out,inst_45459);
} else {
if((state_val_45480 === (5))){
var inst_45473 = cljs.core.async.close_BANG_(out);
var state_45479__$1 = state_45479;
var statearr_45497_46924 = state_45479__$1;
(statearr_45497_46924[(2)] = inst_45473);

(statearr_45497_46924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (10))){
var inst_45471 = (state_45479[(2)]);
var state_45479__$1 = state_45479;
var statearr_45498_46928 = state_45479__$1;
(statearr_45498_46928[(2)] = inst_45471);

(statearr_45498_46928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45480 === (8))){
var inst_45460 = (state_45479[(9)]);
var inst_45458 = (state_45479[(7)]);
var inst_45459 = (state_45479[(8)]);
var inst_45446 = (state_45479[(10)]);
var inst_45463 = (function (){var cs = inst_45446;
var vec__45454 = inst_45458;
var v = inst_45459;
var c = inst_45460;
return (function (p1__45436_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45436_SHARP_);
});
})();
var inst_45464 = cljs.core.filterv(inst_45463,inst_45446);
var inst_45446__$1 = inst_45464;
var state_45479__$1 = (function (){var statearr_45499 = state_45479;
(statearr_45499[(10)] = inst_45446__$1);

return statearr_45499;
})();
var statearr_45501_46940 = state_45479__$1;
(statearr_45501_46940[(2)] = null);

(statearr_45501_46940[(1)] = (2));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45502[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45502[(1)] = (1));

return statearr_45502;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45479){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45479);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45503){var ex__43739__auto__ = e45503;
var statearr_45504_46945 = state_45479;
(statearr_45504_46945[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45479[(4)]))){
var statearr_45505_46946 = state_45479;
(statearr_45505_46946[(1)] = cljs.core.first((state_45479[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46947 = state_45479;
state_45479 = G__46947;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45506 = f__43838__auto__();
(statearr_45506[(6)] = c__43837__auto___46909);

return statearr_45506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
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
var G__45508 = arguments.length;
switch (G__45508) {
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
var c__43837__auto___46952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45532){
var state_val_45533 = (state_45532[(1)]);
if((state_val_45533 === (7))){
var inst_45514 = (state_45532[(7)]);
var inst_45514__$1 = (state_45532[(2)]);
var inst_45515 = (inst_45514__$1 == null);
var inst_45516 = cljs.core.not(inst_45515);
var state_45532__$1 = (function (){var statearr_45534 = state_45532;
(statearr_45534[(7)] = inst_45514__$1);

return statearr_45534;
})();
if(inst_45516){
var statearr_45535_46955 = state_45532__$1;
(statearr_45535_46955[(1)] = (8));

} else {
var statearr_45536_46956 = state_45532__$1;
(statearr_45536_46956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (1))){
var inst_45509 = (0);
var state_45532__$1 = (function (){var statearr_45537 = state_45532;
(statearr_45537[(8)] = inst_45509);

return statearr_45537;
})();
var statearr_45538_46963 = state_45532__$1;
(statearr_45538_46963[(2)] = null);

(statearr_45538_46963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (4))){
var state_45532__$1 = state_45532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45532__$1,(7),ch);
} else {
if((state_val_45533 === (6))){
var inst_45527 = (state_45532[(2)]);
var state_45532__$1 = state_45532;
var statearr_45539_46964 = state_45532__$1;
(statearr_45539_46964[(2)] = inst_45527);

(statearr_45539_46964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (3))){
var inst_45529 = (state_45532[(2)]);
var inst_45530 = cljs.core.async.close_BANG_(out);
var state_45532__$1 = (function (){var statearr_45540 = state_45532;
(statearr_45540[(9)] = inst_45529);

return statearr_45540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45532__$1,inst_45530);
} else {
if((state_val_45533 === (2))){
var inst_45509 = (state_45532[(8)]);
var inst_45511 = (inst_45509 < n);
var state_45532__$1 = state_45532;
if(cljs.core.truth_(inst_45511)){
var statearr_45541_46967 = state_45532__$1;
(statearr_45541_46967[(1)] = (4));

} else {
var statearr_45542_46968 = state_45532__$1;
(statearr_45542_46968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (11))){
var inst_45509 = (state_45532[(8)]);
var inst_45519 = (state_45532[(2)]);
var inst_45520 = (inst_45509 + (1));
var inst_45509__$1 = inst_45520;
var state_45532__$1 = (function (){var statearr_45543 = state_45532;
(statearr_45543[(10)] = inst_45519);

(statearr_45543[(8)] = inst_45509__$1);

return statearr_45543;
})();
var statearr_45544_46969 = state_45532__$1;
(statearr_45544_46969[(2)] = null);

(statearr_45544_46969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (9))){
var state_45532__$1 = state_45532;
var statearr_45545_46970 = state_45532__$1;
(statearr_45545_46970[(2)] = null);

(statearr_45545_46970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (5))){
var state_45532__$1 = state_45532;
var statearr_45546_46971 = state_45532__$1;
(statearr_45546_46971[(2)] = null);

(statearr_45546_46971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (10))){
var inst_45524 = (state_45532[(2)]);
var state_45532__$1 = state_45532;
var statearr_45547_46972 = state_45532__$1;
(statearr_45547_46972[(2)] = inst_45524);

(statearr_45547_46972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45533 === (8))){
var inst_45514 = (state_45532[(7)]);
var state_45532__$1 = state_45532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45532__$1,(11),out,inst_45514);
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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45548[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45548[(1)] = (1));

return statearr_45548;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45532){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45532);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45549){var ex__43739__auto__ = e45549;
var statearr_45550_46979 = state_45532;
(statearr_45550_46979[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45532[(4)]))){
var statearr_45552_46980 = state_45532;
(statearr_45552_46980[(1)] = cljs.core.first((state_45532[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46981 = state_45532;
state_45532 = G__46981;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45553 = f__43838__auto__();
(statearr_45553[(6)] = c__43837__auto___46952);

return statearr_45553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45555 = (function (f,ch,meta45556){
this.f = f;
this.ch = ch;
this.meta45556 = meta45556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45557,meta45556__$1){
var self__ = this;
var _45557__$1 = this;
return (new cljs.core.async.t_cljs$core$async45555(self__.f,self__.ch,meta45556__$1));
}));

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45557){
var self__ = this;
var _45557__$1 = this;
return self__.meta45556;
}));

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45558 = (function (f,ch,meta45556,_,fn1,meta45559){
this.f = f;
this.ch = ch;
this.meta45556 = meta45556;
this._ = _;
this.fn1 = fn1;
this.meta45559 = meta45559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45560,meta45559__$1){
var self__ = this;
var _45560__$1 = this;
return (new cljs.core.async.t_cljs$core$async45558(self__.f,self__.ch,self__.meta45556,self__._,self__.fn1,meta45559__$1));
}));

(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45560){
var self__ = this;
var _45560__$1 = this;
return self__.meta45559;
}));

(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45554_SHARP_){
var G__45584 = (((p1__45554_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45554_SHARP_) : self__.f.call(null,p1__45554_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45584) : f1.call(null,G__45584));
});
}));

(cljs.core.async.t_cljs$core$async45558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45556","meta45556",-1408377932,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45555","cljs.core.async/t_cljs$core$async45555",-702863056,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45559","meta45559",-1026874561,null)], null);
}));

(cljs.core.async.t_cljs$core$async45558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45558");

(cljs.core.async.t_cljs$core$async45558.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45558.
 */
cljs.core.async.__GT_t_cljs$core$async45558 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45558(f__$1,ch__$1,meta45556__$1,___$2,fn1__$1,meta45559){
return (new cljs.core.async.t_cljs$core$async45558(f__$1,ch__$1,meta45556__$1,___$2,fn1__$1,meta45559));
});

}

return (new cljs.core.async.t_cljs$core$async45558(self__.f,self__.ch,self__.meta45556,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45586 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45586) : self__.f.call(null,G__45586));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45556","meta45556",-1408377932,null)], null);
}));

(cljs.core.async.t_cljs$core$async45555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45555");

(cljs.core.async.t_cljs$core$async45555.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45555.
 */
cljs.core.async.__GT_t_cljs$core$async45555 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45555(f__$1,ch__$1,meta45556){
return (new cljs.core.async.t_cljs$core$async45555(f__$1,ch__$1,meta45556));
});

}

return (new cljs.core.async.t_cljs$core$async45555(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45590 = (function (f,ch,meta45591){
this.f = f;
this.ch = ch;
this.meta45591 = meta45591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45592,meta45591__$1){
var self__ = this;
var _45592__$1 = this;
return (new cljs.core.async.t_cljs$core$async45590(self__.f,self__.ch,meta45591__$1));
}));

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45592){
var self__ = this;
var _45592__$1 = this;
return self__.meta45591;
}));

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45591","meta45591",905689379,null)], null);
}));

(cljs.core.async.t_cljs$core$async45590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45590");

(cljs.core.async.t_cljs$core$async45590.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45590.
 */
cljs.core.async.__GT_t_cljs$core$async45590 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45590(f__$1,ch__$1,meta45591){
return (new cljs.core.async.t_cljs$core$async45590(f__$1,ch__$1,meta45591));
});

}

return (new cljs.core.async.t_cljs$core$async45590(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45618 = (function (p,ch,meta45619){
this.p = p;
this.ch = ch;
this.meta45619 = meta45619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45620,meta45619__$1){
var self__ = this;
var _45620__$1 = this;
return (new cljs.core.async.t_cljs$core$async45618(self__.p,self__.ch,meta45619__$1));
}));

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45620){
var self__ = this;
var _45620__$1 = this;
return self__.meta45619;
}));

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45619","meta45619",-1977786795,null)], null);
}));

(cljs.core.async.t_cljs$core$async45618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45618");

(cljs.core.async.t_cljs$core$async45618.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45618.
 */
cljs.core.async.__GT_t_cljs$core$async45618 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45618(p__$1,ch__$1,meta45619){
return (new cljs.core.async.t_cljs$core$async45618(p__$1,ch__$1,meta45619));
});

}

return (new cljs.core.async.t_cljs$core$async45618(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45660 = arguments.length;
switch (G__45660) {
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
var c__43837__auto___47011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45682){
var state_val_45683 = (state_45682[(1)]);
if((state_val_45683 === (7))){
var inst_45678 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
var statearr_45684_47013 = state_45682__$1;
(statearr_45684_47013[(2)] = inst_45678);

(statearr_45684_47013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (1))){
var state_45682__$1 = state_45682;
var statearr_45685_47015 = state_45682__$1;
(statearr_45685_47015[(2)] = null);

(statearr_45685_47015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (4))){
var inst_45664 = (state_45682[(7)]);
var inst_45664__$1 = (state_45682[(2)]);
var inst_45665 = (inst_45664__$1 == null);
var state_45682__$1 = (function (){var statearr_45694 = state_45682;
(statearr_45694[(7)] = inst_45664__$1);

return statearr_45694;
})();
if(cljs.core.truth_(inst_45665)){
var statearr_45695_47017 = state_45682__$1;
(statearr_45695_47017[(1)] = (5));

} else {
var statearr_45696_47018 = state_45682__$1;
(statearr_45696_47018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (6))){
var inst_45664 = (state_45682[(7)]);
var inst_45669 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45664) : p.call(null,inst_45664));
var state_45682__$1 = state_45682;
if(cljs.core.truth_(inst_45669)){
var statearr_45697_47025 = state_45682__$1;
(statearr_45697_47025[(1)] = (8));

} else {
var statearr_45702_47026 = state_45682__$1;
(statearr_45702_47026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (3))){
var inst_45680 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45682__$1,inst_45680);
} else {
if((state_val_45683 === (2))){
var state_45682__$1 = state_45682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45682__$1,(4),ch);
} else {
if((state_val_45683 === (11))){
var inst_45672 = (state_45682[(2)]);
var state_45682__$1 = state_45682;
var statearr_45703_47030 = state_45682__$1;
(statearr_45703_47030[(2)] = inst_45672);

(statearr_45703_47030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (9))){
var state_45682__$1 = state_45682;
var statearr_45705_47032 = state_45682__$1;
(statearr_45705_47032[(2)] = null);

(statearr_45705_47032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (5))){
var inst_45667 = cljs.core.async.close_BANG_(out);
var state_45682__$1 = state_45682;
var statearr_45706_47035 = state_45682__$1;
(statearr_45706_47035[(2)] = inst_45667);

(statearr_45706_47035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (10))){
var inst_45675 = (state_45682[(2)]);
var state_45682__$1 = (function (){var statearr_45707 = state_45682;
(statearr_45707[(8)] = inst_45675);

return statearr_45707;
})();
var statearr_45708_47040 = state_45682__$1;
(statearr_45708_47040[(2)] = null);

(statearr_45708_47040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45683 === (8))){
var inst_45664 = (state_45682[(7)]);
var state_45682__$1 = state_45682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45682__$1,(11),out,inst_45664);
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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45712 = [null,null,null,null,null,null,null,null,null];
(statearr_45712[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45712[(1)] = (1));

return statearr_45712;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45682){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45682);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45714){var ex__43739__auto__ = e45714;
var statearr_45715_47046 = state_45682;
(statearr_45715_47046[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45682[(4)]))){
var statearr_45716_47047 = state_45682;
(statearr_45716_47047[(1)] = cljs.core.first((state_45682[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47048 = state_45682;
state_45682 = G__47048;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45718 = f__43838__auto__();
(statearr_45718[(6)] = c__43837__auto___47011);

return statearr_45718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45721 = arguments.length;
switch (G__45721) {
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
var c__43837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45800){
var state_val_45801 = (state_45800[(1)]);
if((state_val_45801 === (7))){
var inst_45796 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45802_47053 = state_45800__$1;
(statearr_45802_47053[(2)] = inst_45796);

(statearr_45802_47053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (20))){
var inst_45755 = (state_45800[(7)]);
var inst_45769 = (state_45800[(2)]);
var inst_45770 = cljs.core.next(inst_45755);
var inst_45741 = inst_45770;
var inst_45742 = null;
var inst_45743 = (0);
var inst_45744 = (0);
var state_45800__$1 = (function (){var statearr_45803 = state_45800;
(statearr_45803[(8)] = inst_45769);

(statearr_45803[(9)] = inst_45743);

(statearr_45803[(10)] = inst_45741);

(statearr_45803[(11)] = inst_45742);

(statearr_45803[(12)] = inst_45744);

return statearr_45803;
})();
var statearr_45804_47060 = state_45800__$1;
(statearr_45804_47060[(2)] = null);

(statearr_45804_47060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (1))){
var state_45800__$1 = state_45800;
var statearr_45805_47062 = state_45800__$1;
(statearr_45805_47062[(2)] = null);

(statearr_45805_47062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (4))){
var inst_45730 = (state_45800[(13)]);
var inst_45730__$1 = (state_45800[(2)]);
var inst_45731 = (inst_45730__$1 == null);
var state_45800__$1 = (function (){var statearr_45806 = state_45800;
(statearr_45806[(13)] = inst_45730__$1);

return statearr_45806;
})();
if(cljs.core.truth_(inst_45731)){
var statearr_45807_47063 = state_45800__$1;
(statearr_45807_47063[(1)] = (5));

} else {
var statearr_45808_47064 = state_45800__$1;
(statearr_45808_47064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (15))){
var state_45800__$1 = state_45800;
var statearr_45812_47065 = state_45800__$1;
(statearr_45812_47065[(2)] = null);

(statearr_45812_47065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (21))){
var state_45800__$1 = state_45800;
var statearr_45813_47067 = state_45800__$1;
(statearr_45813_47067[(2)] = null);

(statearr_45813_47067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (13))){
var inst_45743 = (state_45800[(9)]);
var inst_45741 = (state_45800[(10)]);
var inst_45742 = (state_45800[(11)]);
var inst_45744 = (state_45800[(12)]);
var inst_45751 = (state_45800[(2)]);
var inst_45752 = (inst_45744 + (1));
var tmp45809 = inst_45743;
var tmp45810 = inst_45741;
var tmp45811 = inst_45742;
var inst_45741__$1 = tmp45810;
var inst_45742__$1 = tmp45811;
var inst_45743__$1 = tmp45809;
var inst_45744__$1 = inst_45752;
var state_45800__$1 = (function (){var statearr_45814 = state_45800;
(statearr_45814[(9)] = inst_45743__$1);

(statearr_45814[(14)] = inst_45751);

(statearr_45814[(10)] = inst_45741__$1);

(statearr_45814[(11)] = inst_45742__$1);

(statearr_45814[(12)] = inst_45744__$1);

return statearr_45814;
})();
var statearr_45815_47069 = state_45800__$1;
(statearr_45815_47069[(2)] = null);

(statearr_45815_47069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (22))){
var state_45800__$1 = state_45800;
var statearr_45818_47071 = state_45800__$1;
(statearr_45818_47071[(2)] = null);

(statearr_45818_47071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (6))){
var inst_45730 = (state_45800[(13)]);
var inst_45739 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45730) : f.call(null,inst_45730));
var inst_45740 = cljs.core.seq(inst_45739);
var inst_45741 = inst_45740;
var inst_45742 = null;
var inst_45743 = (0);
var inst_45744 = (0);
var state_45800__$1 = (function (){var statearr_45822 = state_45800;
(statearr_45822[(9)] = inst_45743);

(statearr_45822[(10)] = inst_45741);

(statearr_45822[(11)] = inst_45742);

(statearr_45822[(12)] = inst_45744);

return statearr_45822;
})();
var statearr_45824_47073 = state_45800__$1;
(statearr_45824_47073[(2)] = null);

(statearr_45824_47073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (17))){
var inst_45755 = (state_45800[(7)]);
var inst_45762 = cljs.core.chunk_first(inst_45755);
var inst_45763 = cljs.core.chunk_rest(inst_45755);
var inst_45764 = cljs.core.count(inst_45762);
var inst_45741 = inst_45763;
var inst_45742 = inst_45762;
var inst_45743 = inst_45764;
var inst_45744 = (0);
var state_45800__$1 = (function (){var statearr_45825 = state_45800;
(statearr_45825[(9)] = inst_45743);

(statearr_45825[(10)] = inst_45741);

(statearr_45825[(11)] = inst_45742);

(statearr_45825[(12)] = inst_45744);

return statearr_45825;
})();
var statearr_45827_47077 = state_45800__$1;
(statearr_45827_47077[(2)] = null);

(statearr_45827_47077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (3))){
var inst_45798 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45800__$1,inst_45798);
} else {
if((state_val_45801 === (12))){
var inst_45778 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45829_47079 = state_45800__$1;
(statearr_45829_47079[(2)] = inst_45778);

(statearr_45829_47079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (2))){
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45800__$1,(4),in$);
} else {
if((state_val_45801 === (23))){
var inst_45794 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45830_47080 = state_45800__$1;
(statearr_45830_47080[(2)] = inst_45794);

(statearr_45830_47080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (19))){
var inst_45773 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45831_47081 = state_45800__$1;
(statearr_45831_47081[(2)] = inst_45773);

(statearr_45831_47081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (11))){
var inst_45755 = (state_45800[(7)]);
var inst_45741 = (state_45800[(10)]);
var inst_45755__$1 = cljs.core.seq(inst_45741);
var state_45800__$1 = (function (){var statearr_45832 = state_45800;
(statearr_45832[(7)] = inst_45755__$1);

return statearr_45832;
})();
if(inst_45755__$1){
var statearr_45833_47084 = state_45800__$1;
(statearr_45833_47084[(1)] = (14));

} else {
var statearr_45834_47085 = state_45800__$1;
(statearr_45834_47085[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (9))){
var inst_45780 = (state_45800[(2)]);
var inst_45789 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45800__$1 = (function (){var statearr_45835 = state_45800;
(statearr_45835[(15)] = inst_45780);

return statearr_45835;
})();
if(cljs.core.truth_(inst_45789)){
var statearr_45837_47088 = state_45800__$1;
(statearr_45837_47088[(1)] = (21));

} else {
var statearr_45839_47092 = state_45800__$1;
(statearr_45839_47092[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (5))){
var inst_45733 = cljs.core.async.close_BANG_(out);
var state_45800__$1 = state_45800;
var statearr_45841_47093 = state_45800__$1;
(statearr_45841_47093[(2)] = inst_45733);

(statearr_45841_47093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (14))){
var inst_45755 = (state_45800[(7)]);
var inst_45760 = cljs.core.chunked_seq_QMARK_(inst_45755);
var state_45800__$1 = state_45800;
if(inst_45760){
var statearr_45842_47094 = state_45800__$1;
(statearr_45842_47094[(1)] = (17));

} else {
var statearr_45843_47095 = state_45800__$1;
(statearr_45843_47095[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (16))){
var inst_45776 = (state_45800[(2)]);
var state_45800__$1 = state_45800;
var statearr_45844_47096 = state_45800__$1;
(statearr_45844_47096[(2)] = inst_45776);

(statearr_45844_47096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45801 === (10))){
var inst_45742 = (state_45800[(11)]);
var inst_45744 = (state_45800[(12)]);
var inst_45749 = cljs.core._nth(inst_45742,inst_45744);
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45800__$1,(13),out,inst_45749);
} else {
if((state_val_45801 === (18))){
var inst_45755 = (state_45800[(7)]);
var inst_45767 = cljs.core.first(inst_45755);
var state_45800__$1 = state_45800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45800__$1,(20),out,inst_45767);
} else {
if((state_val_45801 === (8))){
var inst_45743 = (state_45800[(9)]);
var inst_45744 = (state_45800[(12)]);
var inst_45746 = (inst_45744 < inst_45743);
var inst_45747 = inst_45746;
var state_45800__$1 = state_45800;
if(cljs.core.truth_(inst_45747)){
var statearr_45848_47097 = state_45800__$1;
(statearr_45848_47097[(1)] = (10));

} else {
var statearr_45849_47098 = state_45800__$1;
(statearr_45849_47098[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____0 = (function (){
var statearr_45850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45850[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__);

(statearr_45850[(1)] = (1));

return statearr_45850;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____1 = (function (state_45800){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45800);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45851){var ex__43739__auto__ = e45851;
var statearr_45852_47108 = state_45800;
(statearr_45852_47108[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45800[(4)]))){
var statearr_45853_47110 = state_45800;
(statearr_45853_47110[(1)] = cljs.core.first((state_45800[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47111 = state_45800;
state_45800 = G__47111;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__ = function(state_45800){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____1.call(this,state_45800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43736__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45854 = f__43838__auto__();
(statearr_45854[(6)] = c__43837__auto__);

return statearr_45854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

return c__43837__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45862 = arguments.length;
switch (G__45862) {
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
var G__45867 = arguments.length;
switch (G__45867) {
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
var G__45874 = arguments.length;
switch (G__45874) {
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
var c__43837__auto___47124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45901){
var state_val_45902 = (state_45901[(1)]);
if((state_val_45902 === (7))){
var inst_45896 = (state_45901[(2)]);
var state_45901__$1 = state_45901;
var statearr_45903_47130 = state_45901__$1;
(statearr_45903_47130[(2)] = inst_45896);

(statearr_45903_47130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (1))){
var inst_45878 = null;
var state_45901__$1 = (function (){var statearr_45904 = state_45901;
(statearr_45904[(7)] = inst_45878);

return statearr_45904;
})();
var statearr_45906_47137 = state_45901__$1;
(statearr_45906_47137[(2)] = null);

(statearr_45906_47137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (4))){
var inst_45881 = (state_45901[(8)]);
var inst_45881__$1 = (state_45901[(2)]);
var inst_45882 = (inst_45881__$1 == null);
var inst_45883 = cljs.core.not(inst_45882);
var state_45901__$1 = (function (){var statearr_45909 = state_45901;
(statearr_45909[(8)] = inst_45881__$1);

return statearr_45909;
})();
if(inst_45883){
var statearr_45910_47138 = state_45901__$1;
(statearr_45910_47138[(1)] = (5));

} else {
var statearr_45911_47139 = state_45901__$1;
(statearr_45911_47139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (6))){
var state_45901__$1 = state_45901;
var statearr_45912_47144 = state_45901__$1;
(statearr_45912_47144[(2)] = null);

(statearr_45912_47144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (3))){
var inst_45898 = (state_45901[(2)]);
var inst_45899 = cljs.core.async.close_BANG_(out);
var state_45901__$1 = (function (){var statearr_45913 = state_45901;
(statearr_45913[(9)] = inst_45898);

return statearr_45913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45901__$1,inst_45899);
} else {
if((state_val_45902 === (2))){
var state_45901__$1 = state_45901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45901__$1,(4),ch);
} else {
if((state_val_45902 === (11))){
var inst_45881 = (state_45901[(8)]);
var inst_45890 = (state_45901[(2)]);
var inst_45878 = inst_45881;
var state_45901__$1 = (function (){var statearr_45914 = state_45901;
(statearr_45914[(7)] = inst_45878);

(statearr_45914[(10)] = inst_45890);

return statearr_45914;
})();
var statearr_45915_47149 = state_45901__$1;
(statearr_45915_47149[(2)] = null);

(statearr_45915_47149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (9))){
var inst_45881 = (state_45901[(8)]);
var state_45901__$1 = state_45901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45901__$1,(11),out,inst_45881);
} else {
if((state_val_45902 === (5))){
var inst_45881 = (state_45901[(8)]);
var inst_45878 = (state_45901[(7)]);
var inst_45885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45881,inst_45878);
var state_45901__$1 = state_45901;
if(inst_45885){
var statearr_45923_47158 = state_45901__$1;
(statearr_45923_47158[(1)] = (8));

} else {
var statearr_45924_47161 = state_45901__$1;
(statearr_45924_47161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (10))){
var inst_45893 = (state_45901[(2)]);
var state_45901__$1 = state_45901;
var statearr_45925_47164 = state_45901__$1;
(statearr_45925_47164[(2)] = inst_45893);

(statearr_45925_47164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45902 === (8))){
var inst_45878 = (state_45901[(7)]);
var tmp45921 = inst_45878;
var inst_45878__$1 = tmp45921;
var state_45901__$1 = (function (){var statearr_45926 = state_45901;
(statearr_45926[(7)] = inst_45878__$1);

return statearr_45926;
})();
var statearr_45927_47166 = state_45901__$1;
(statearr_45927_47166[(2)] = null);

(statearr_45927_47166[(1)] = (2));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_45928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45928[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_45928[(1)] = (1));

return statearr_45928;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45901){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45901);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e45929){var ex__43739__auto__ = e45929;
var statearr_45930_47168 = state_45901;
(statearr_45930_47168[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45901[(4)]))){
var statearr_45931_47171 = state_45901;
(statearr_45931_47171[(1)] = cljs.core.first((state_45901[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47172 = state_45901;
state_45901 = G__47172;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_45939 = f__43838__auto__();
(statearr_45939[(6)] = c__43837__auto___47124);

return statearr_45939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45942 = arguments.length;
switch (G__45942) {
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
var c__43837__auto___47175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_45984){
var state_val_45985 = (state_45984[(1)]);
if((state_val_45985 === (7))){
var inst_45980 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_45988_47180 = state_45984__$1;
(statearr_45988_47180[(2)] = inst_45980);

(statearr_45988_47180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (1))){
var inst_45945 = (new Array(n));
var inst_45946 = inst_45945;
var inst_45947 = (0);
var state_45984__$1 = (function (){var statearr_45989 = state_45984;
(statearr_45989[(7)] = inst_45947);

(statearr_45989[(8)] = inst_45946);

return statearr_45989;
})();
var statearr_45990_47182 = state_45984__$1;
(statearr_45990_47182[(2)] = null);

(statearr_45990_47182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (4))){
var inst_45951 = (state_45984[(9)]);
var inst_45951__$1 = (state_45984[(2)]);
var inst_45952 = (inst_45951__$1 == null);
var inst_45953 = cljs.core.not(inst_45952);
var state_45984__$1 = (function (){var statearr_45991 = state_45984;
(statearr_45991[(9)] = inst_45951__$1);

return statearr_45991;
})();
if(inst_45953){
var statearr_45992_47183 = state_45984__$1;
(statearr_45992_47183[(1)] = (5));

} else {
var statearr_45993_47184 = state_45984__$1;
(statearr_45993_47184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (15))){
var inst_45974 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_45994_47185 = state_45984__$1;
(statearr_45994_47185[(2)] = inst_45974);

(statearr_45994_47185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (13))){
var state_45984__$1 = state_45984;
var statearr_45995_47187 = state_45984__$1;
(statearr_45995_47187[(2)] = null);

(statearr_45995_47187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (6))){
var inst_45947 = (state_45984[(7)]);
var inst_45970 = (inst_45947 > (0));
var state_45984__$1 = state_45984;
if(cljs.core.truth_(inst_45970)){
var statearr_45996_47188 = state_45984__$1;
(statearr_45996_47188[(1)] = (12));

} else {
var statearr_45997_47189 = state_45984__$1;
(statearr_45997_47189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (3))){
var inst_45982 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45984__$1,inst_45982);
} else {
if((state_val_45985 === (12))){
var inst_45946 = (state_45984[(8)]);
var inst_45972 = cljs.core.vec(inst_45946);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45984__$1,(15),out,inst_45972);
} else {
if((state_val_45985 === (2))){
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45984__$1,(4),ch);
} else {
if((state_val_45985 === (11))){
var inst_45964 = (state_45984[(2)]);
var inst_45965 = (new Array(n));
var inst_45946 = inst_45965;
var inst_45947 = (0);
var state_45984__$1 = (function (){var statearr_46000 = state_45984;
(statearr_46000[(7)] = inst_45947);

(statearr_46000[(10)] = inst_45964);

(statearr_46000[(8)] = inst_45946);

return statearr_46000;
})();
var statearr_46001_47192 = state_45984__$1;
(statearr_46001_47192[(2)] = null);

(statearr_46001_47192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (9))){
var inst_45946 = (state_45984[(8)]);
var inst_45962 = cljs.core.vec(inst_45946);
var state_45984__$1 = state_45984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45984__$1,(11),out,inst_45962);
} else {
if((state_val_45985 === (5))){
var inst_45951 = (state_45984[(9)]);
var inst_45947 = (state_45984[(7)]);
var inst_45946 = (state_45984[(8)]);
var inst_45957 = (state_45984[(11)]);
var inst_45956 = (inst_45946[inst_45947] = inst_45951);
var inst_45957__$1 = (inst_45947 + (1));
var inst_45958 = (inst_45957__$1 < n);
var state_45984__$1 = (function (){var statearr_46004 = state_45984;
(statearr_46004[(11)] = inst_45957__$1);

(statearr_46004[(12)] = inst_45956);

return statearr_46004;
})();
if(cljs.core.truth_(inst_45958)){
var statearr_46006_47199 = state_45984__$1;
(statearr_46006_47199[(1)] = (8));

} else {
var statearr_46007_47203 = state_45984__$1;
(statearr_46007_47203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (14))){
var inst_45977 = (state_45984[(2)]);
var inst_45978 = cljs.core.async.close_BANG_(out);
var state_45984__$1 = (function (){var statearr_46009 = state_45984;
(statearr_46009[(13)] = inst_45977);

return statearr_46009;
})();
var statearr_46010_47211 = state_45984__$1;
(statearr_46010_47211[(2)] = inst_45978);

(statearr_46010_47211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (10))){
var inst_45968 = (state_45984[(2)]);
var state_45984__$1 = state_45984;
var statearr_46011_47223 = state_45984__$1;
(statearr_46011_47223[(2)] = inst_45968);

(statearr_46011_47223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45985 === (8))){
var inst_45946 = (state_45984[(8)]);
var inst_45957 = (state_45984[(11)]);
var tmp46008 = inst_45946;
var inst_45946__$1 = tmp46008;
var inst_45947 = inst_45957;
var state_45984__$1 = (function (){var statearr_46012 = state_45984;
(statearr_46012[(7)] = inst_45947);

(statearr_46012[(8)] = inst_45946__$1);

return statearr_46012;
})();
var statearr_46017_47239 = state_45984__$1;
(statearr_46017_47239[(2)] = null);

(statearr_46017_47239[(1)] = (2));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_46026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46026[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_46026[(1)] = (1));

return statearr_46026;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_45984){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_45984);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e46027){var ex__43739__auto__ = e46027;
var statearr_46032_47256 = state_45984;
(statearr_46032_47256[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_45984[(4)]))){
var statearr_46037_47261 = state_45984;
(statearr_46037_47261[(1)] = cljs.core.first((state_45984[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47263 = state_45984;
state_45984 = G__47263;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_45984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_45984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_46038 = f__43838__auto__();
(statearr_46038[(6)] = c__43837__auto___47175);

return statearr_46038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46040 = arguments.length;
switch (G__46040) {
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
var c__43837__auto___47297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_46082){
var state_val_46083 = (state_46082[(1)]);
if((state_val_46083 === (7))){
var inst_46078 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46084_47298 = state_46082__$1;
(statearr_46084_47298[(2)] = inst_46078);

(statearr_46084_47298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (1))){
var inst_46041 = [];
var inst_46042 = inst_46041;
var inst_46043 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46082__$1 = (function (){var statearr_46085 = state_46082;
(statearr_46085[(7)] = inst_46043);

(statearr_46085[(8)] = inst_46042);

return statearr_46085;
})();
var statearr_46086_47301 = state_46082__$1;
(statearr_46086_47301[(2)] = null);

(statearr_46086_47301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (4))){
var inst_46046 = (state_46082[(9)]);
var inst_46046__$1 = (state_46082[(2)]);
var inst_46047 = (inst_46046__$1 == null);
var inst_46048 = cljs.core.not(inst_46047);
var state_46082__$1 = (function (){var statearr_46087 = state_46082;
(statearr_46087[(9)] = inst_46046__$1);

return statearr_46087;
})();
if(inst_46048){
var statearr_46088_47303 = state_46082__$1;
(statearr_46088_47303[(1)] = (5));

} else {
var statearr_46089_47304 = state_46082__$1;
(statearr_46089_47304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (15))){
var inst_46072 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46090_47305 = state_46082__$1;
(statearr_46090_47305[(2)] = inst_46072);

(statearr_46090_47305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (13))){
var state_46082__$1 = state_46082;
var statearr_46091_47313 = state_46082__$1;
(statearr_46091_47313[(2)] = null);

(statearr_46091_47313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (6))){
var inst_46042 = (state_46082[(8)]);
var inst_46067 = inst_46042.length;
var inst_46068 = (inst_46067 > (0));
var state_46082__$1 = state_46082;
if(cljs.core.truth_(inst_46068)){
var statearr_46092_47318 = state_46082__$1;
(statearr_46092_47318[(1)] = (12));

} else {
var statearr_46093_47319 = state_46082__$1;
(statearr_46093_47319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (3))){
var inst_46080 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46082__$1,inst_46080);
} else {
if((state_val_46083 === (12))){
var inst_46042 = (state_46082[(8)]);
var inst_46070 = cljs.core.vec(inst_46042);
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46082__$1,(15),out,inst_46070);
} else {
if((state_val_46083 === (2))){
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46082__$1,(4),ch);
} else {
if((state_val_46083 === (11))){
var inst_46046 = (state_46082[(9)]);
var inst_46050 = (state_46082[(10)]);
var inst_46060 = (state_46082[(2)]);
var inst_46061 = [];
var inst_46062 = inst_46061.push(inst_46046);
var inst_46042 = inst_46061;
var inst_46043 = inst_46050;
var state_46082__$1 = (function (){var statearr_46098 = state_46082;
(statearr_46098[(7)] = inst_46043);

(statearr_46098[(11)] = inst_46060);

(statearr_46098[(12)] = inst_46062);

(statearr_46098[(8)] = inst_46042);

return statearr_46098;
})();
var statearr_46099_47328 = state_46082__$1;
(statearr_46099_47328[(2)] = null);

(statearr_46099_47328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (9))){
var inst_46042 = (state_46082[(8)]);
var inst_46058 = cljs.core.vec(inst_46042);
var state_46082__$1 = state_46082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46082__$1,(11),out,inst_46058);
} else {
if((state_val_46083 === (5))){
var inst_46046 = (state_46082[(9)]);
var inst_46043 = (state_46082[(7)]);
var inst_46050 = (state_46082[(10)]);
var inst_46050__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46046) : f.call(null,inst_46046));
var inst_46051 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46050__$1,inst_46043);
var inst_46052 = cljs.core.keyword_identical_QMARK_(inst_46043,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46053 = ((inst_46051) || (inst_46052));
var state_46082__$1 = (function (){var statearr_46101 = state_46082;
(statearr_46101[(10)] = inst_46050__$1);

return statearr_46101;
})();
if(cljs.core.truth_(inst_46053)){
var statearr_46102_47333 = state_46082__$1;
(statearr_46102_47333[(1)] = (8));

} else {
var statearr_46103_47334 = state_46082__$1;
(statearr_46103_47334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (14))){
var inst_46075 = (state_46082[(2)]);
var inst_46076 = cljs.core.async.close_BANG_(out);
var state_46082__$1 = (function (){var statearr_46106 = state_46082;
(statearr_46106[(13)] = inst_46075);

return statearr_46106;
})();
var statearr_46107_47338 = state_46082__$1;
(statearr_46107_47338[(2)] = inst_46076);

(statearr_46107_47338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (10))){
var inst_46065 = (state_46082[(2)]);
var state_46082__$1 = state_46082;
var statearr_46108_47340 = state_46082__$1;
(statearr_46108_47340[(2)] = inst_46065);

(statearr_46108_47340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46083 === (8))){
var inst_46046 = (state_46082[(9)]);
var inst_46050 = (state_46082[(10)]);
var inst_46042 = (state_46082[(8)]);
var inst_46055 = inst_46042.push(inst_46046);
var tmp46104 = inst_46042;
var inst_46042__$1 = tmp46104;
var inst_46043 = inst_46050;
var state_46082__$1 = (function (){var statearr_46110 = state_46082;
(statearr_46110[(14)] = inst_46055);

(statearr_46110[(7)] = inst_46043);

(statearr_46110[(8)] = inst_46042__$1);

return statearr_46110;
})();
var statearr_46114_47341 = state_46082__$1;
(statearr_46114_47341[(2)] = null);

(statearr_46114_47341[(1)] = (2));


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
var cljs$core$async$state_machine__43736__auto__ = null;
var cljs$core$async$state_machine__43736__auto____0 = (function (){
var statearr_46115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46115[(0)] = cljs$core$async$state_machine__43736__auto__);

(statearr_46115[(1)] = (1));

return statearr_46115;
});
var cljs$core$async$state_machine__43736__auto____1 = (function (state_46082){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_46082);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e46116){var ex__43739__auto__ = e46116;
var statearr_46117_47347 = state_46082;
(statearr_46117_47347[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_46082[(4)]))){
var statearr_46118_47349 = state_46082;
(statearr_46118_47349[(1)] = cljs.core.first((state_46082[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47351 = state_46082;
state_46082 = G__47351;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
cljs$core$async$state_machine__43736__auto__ = function(state_46082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43736__auto____1.call(this,state_46082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43736__auto____0;
cljs$core$async$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43736__auto____1;
return cljs$core$async$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_46119 = f__43838__auto__();
(statearr_46119[(6)] = c__43837__auto___47297);

return statearr_46119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
