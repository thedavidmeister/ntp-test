// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9109__auto__,writer__9110__auto__,opt__9111__auto__){
return cljs.core._write(writer__9110__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14291 = arguments.length;
var i__9718__auto___14292 = (0);
while(true){
if((i__9718__auto___14292 < len__9717__auto___14291)){
args__9724__auto__.push((arguments[i__9718__auto___14292]));

var G__14293 = (i__9718__auto___14292 + (1));
i__9718__auto___14292 = G__14293;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq14290){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14290));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14295 = arguments.length;
var i__9718__auto___14296 = (0);
while(true){
if((i__9718__auto___14296 < len__9717__auto___14295)){
args__9724__auto__.push((arguments[i__9718__auto___14296]));

var G__14297 = (i__9718__auto___14296 + (1));
i__9718__auto___14296 = G__14297;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq14294){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14294));
});

var g_QMARK__14301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_14302 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14301){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__14301))
,null));
var mkg_14303 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14301,g_14302){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__14301,g_14302))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__14301,g_14302,mkg_14303){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__14298 = cljs.core.deref(g_QMARK__14301);
return (fexpr__14298.cljs$core$IFn$_invoke$arity$1 ? fexpr__14298.cljs$core$IFn$_invoke$arity$1(x) : fexpr__14298.call(null,x));
});})(g_QMARK__14301,g_14302,mkg_14303))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__14301,g_14302,mkg_14303){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__14299 = cljs.core.deref(mkg_14303);
return (fexpr__14299.cljs$core$IFn$_invoke$arity$1 ? fexpr__14299.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__14299.call(null,gfn));
});})(g_QMARK__14301,g_14302,mkg_14303))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__14301,g_14302,mkg_14303){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__14300 = cljs.core.deref(g_14302);
return (fexpr__14300.cljs$core$IFn$_invoke$arity$1 ? fexpr__14300.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__14300.call(null,generator));
});})(g_QMARK__14301,g_14302,mkg_14303))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__14304 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__14304.cljs$core$IFn$_invoke$arity$2 ? fexpr__14304.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__14304.call(null,rnd,size));
}));
});
var g__14262__auto___14324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__14262__auto___14324){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14325 = arguments.length;
var i__9718__auto___14326 = (0);
while(true){
if((i__9718__auto___14326 < len__9717__auto___14325)){
args__9724__auto__.push((arguments[i__9718__auto___14326]));

var G__14327 = (i__9718__auto___14326 + (1));
i__9718__auto___14326 = G__14327;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14324))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14324){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14324),args);
});})(g__14262__auto___14324))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__14262__auto___14324){
return (function (seq14305){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14305));
});})(g__14262__auto___14324))
;


var g__14262__auto___14328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__14262__auto___14328){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14329 = arguments.length;
var i__9718__auto___14330 = (0);
while(true){
if((i__9718__auto___14330 < len__9717__auto___14329)){
args__9724__auto__.push((arguments[i__9718__auto___14330]));

var G__14331 = (i__9718__auto___14330 + (1));
i__9718__auto___14330 = G__14331;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14328))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14328){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14328),args);
});})(g__14262__auto___14328))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__14262__auto___14328){
return (function (seq14306){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14306));
});})(g__14262__auto___14328))
;


var g__14262__auto___14332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__14262__auto___14332){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14333 = arguments.length;
var i__9718__auto___14334 = (0);
while(true){
if((i__9718__auto___14334 < len__9717__auto___14333)){
args__9724__auto__.push((arguments[i__9718__auto___14334]));

var G__14335 = (i__9718__auto___14334 + (1));
i__9718__auto___14334 = G__14335;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14332))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14332){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14332),args);
});})(g__14262__auto___14332))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__14262__auto___14332){
return (function (seq14307){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14307));
});})(g__14262__auto___14332))
;


var g__14262__auto___14336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__14262__auto___14336){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14337 = arguments.length;
var i__9718__auto___14338 = (0);
while(true){
if((i__9718__auto___14338 < len__9717__auto___14337)){
args__9724__auto__.push((arguments[i__9718__auto___14338]));

var G__14339 = (i__9718__auto___14338 + (1));
i__9718__auto___14338 = G__14339;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14336))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14336){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14336),args);
});})(g__14262__auto___14336))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__14262__auto___14336){
return (function (seq14308){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14308));
});})(g__14262__auto___14336))
;


var g__14262__auto___14340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__14262__auto___14340){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14341 = arguments.length;
var i__9718__auto___14342 = (0);
while(true){
if((i__9718__auto___14342 < len__9717__auto___14341)){
args__9724__auto__.push((arguments[i__9718__auto___14342]));

var G__14343 = (i__9718__auto___14342 + (1));
i__9718__auto___14342 = G__14343;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14340))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14340){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14340),args);
});})(g__14262__auto___14340))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__14262__auto___14340){
return (function (seq14309){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14309));
});})(g__14262__auto___14340))
;


var g__14262__auto___14344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__14262__auto___14344){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14345 = arguments.length;
var i__9718__auto___14346 = (0);
while(true){
if((i__9718__auto___14346 < len__9717__auto___14345)){
args__9724__auto__.push((arguments[i__9718__auto___14346]));

var G__14347 = (i__9718__auto___14346 + (1));
i__9718__auto___14346 = G__14347;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14344))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14344){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14344),args);
});})(g__14262__auto___14344))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__14262__auto___14344){
return (function (seq14310){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14310));
});})(g__14262__auto___14344))
;


var g__14262__auto___14348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__14262__auto___14348){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14349 = arguments.length;
var i__9718__auto___14350 = (0);
while(true){
if((i__9718__auto___14350 < len__9717__auto___14349)){
args__9724__auto__.push((arguments[i__9718__auto___14350]));

var G__14351 = (i__9718__auto___14350 + (1));
i__9718__auto___14350 = G__14351;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14348))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14348){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14348),args);
});})(g__14262__auto___14348))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__14262__auto___14348){
return (function (seq14311){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14311));
});})(g__14262__auto___14348))
;


var g__14262__auto___14352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__14262__auto___14352){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14353 = arguments.length;
var i__9718__auto___14354 = (0);
while(true){
if((i__9718__auto___14354 < len__9717__auto___14353)){
args__9724__auto__.push((arguments[i__9718__auto___14354]));

var G__14355 = (i__9718__auto___14354 + (1));
i__9718__auto___14354 = G__14355;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14352))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14352){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14352),args);
});})(g__14262__auto___14352))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__14262__auto___14352){
return (function (seq14312){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14312));
});})(g__14262__auto___14352))
;


var g__14262__auto___14356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__14262__auto___14356){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14357 = arguments.length;
var i__9718__auto___14358 = (0);
while(true){
if((i__9718__auto___14358 < len__9717__auto___14357)){
args__9724__auto__.push((arguments[i__9718__auto___14358]));

var G__14359 = (i__9718__auto___14358 + (1));
i__9718__auto___14358 = G__14359;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14356))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14356){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14356),args);
});})(g__14262__auto___14356))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__14262__auto___14356){
return (function (seq14313){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14313));
});})(g__14262__auto___14356))
;


var g__14262__auto___14360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__14262__auto___14360){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14361 = arguments.length;
var i__9718__auto___14362 = (0);
while(true){
if((i__9718__auto___14362 < len__9717__auto___14361)){
args__9724__auto__.push((arguments[i__9718__auto___14362]));

var G__14363 = (i__9718__auto___14362 + (1));
i__9718__auto___14362 = G__14363;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14360))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14360){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14360),args);
});})(g__14262__auto___14360))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__14262__auto___14360){
return (function (seq14314){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14314));
});})(g__14262__auto___14360))
;


var g__14262__auto___14364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__14262__auto___14364){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14365 = arguments.length;
var i__9718__auto___14366 = (0);
while(true){
if((i__9718__auto___14366 < len__9717__auto___14365)){
args__9724__auto__.push((arguments[i__9718__auto___14366]));

var G__14367 = (i__9718__auto___14366 + (1));
i__9718__auto___14366 = G__14367;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14364))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14364){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14364),args);
});})(g__14262__auto___14364))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__14262__auto___14364){
return (function (seq14315){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14315));
});})(g__14262__auto___14364))
;


var g__14262__auto___14368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__14262__auto___14368){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14369 = arguments.length;
var i__9718__auto___14370 = (0);
while(true){
if((i__9718__auto___14370 < len__9717__auto___14369)){
args__9724__auto__.push((arguments[i__9718__auto___14370]));

var G__14371 = (i__9718__auto___14370 + (1));
i__9718__auto___14370 = G__14371;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14368))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14368){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14368),args);
});})(g__14262__auto___14368))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__14262__auto___14368){
return (function (seq14316){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14316));
});})(g__14262__auto___14368))
;


var g__14262__auto___14372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__14262__auto___14372){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14373 = arguments.length;
var i__9718__auto___14374 = (0);
while(true){
if((i__9718__auto___14374 < len__9717__auto___14373)){
args__9724__auto__.push((arguments[i__9718__auto___14374]));

var G__14375 = (i__9718__auto___14374 + (1));
i__9718__auto___14374 = G__14375;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14372))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14372){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14372),args);
});})(g__14262__auto___14372))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__14262__auto___14372){
return (function (seq14317){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14317));
});})(g__14262__auto___14372))
;


var g__14262__auto___14376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__14262__auto___14376){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14377 = arguments.length;
var i__9718__auto___14378 = (0);
while(true){
if((i__9718__auto___14378 < len__9717__auto___14377)){
args__9724__auto__.push((arguments[i__9718__auto___14378]));

var G__14379 = (i__9718__auto___14378 + (1));
i__9718__auto___14378 = G__14379;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14376))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14376){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14376),args);
});})(g__14262__auto___14376))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__14262__auto___14376){
return (function (seq14318){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14318));
});})(g__14262__auto___14376))
;


var g__14262__auto___14380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__14262__auto___14380){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14381 = arguments.length;
var i__9718__auto___14382 = (0);
while(true){
if((i__9718__auto___14382 < len__9717__auto___14381)){
args__9724__auto__.push((arguments[i__9718__auto___14382]));

var G__14383 = (i__9718__auto___14382 + (1));
i__9718__auto___14382 = G__14383;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14380))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14380){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14380),args);
});})(g__14262__auto___14380))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__14262__auto___14380){
return (function (seq14319){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14319));
});})(g__14262__auto___14380))
;


var g__14262__auto___14384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__14262__auto___14384){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14385 = arguments.length;
var i__9718__auto___14386 = (0);
while(true){
if((i__9718__auto___14386 < len__9717__auto___14385)){
args__9724__auto__.push((arguments[i__9718__auto___14386]));

var G__14387 = (i__9718__auto___14386 + (1));
i__9718__auto___14386 = G__14387;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14384))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14384){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14384),args);
});})(g__14262__auto___14384))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__14262__auto___14384){
return (function (seq14320){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14320));
});})(g__14262__auto___14384))
;


var g__14262__auto___14388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__14262__auto___14388){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14389 = arguments.length;
var i__9718__auto___14390 = (0);
while(true){
if((i__9718__auto___14390 < len__9717__auto___14389)){
args__9724__auto__.push((arguments[i__9718__auto___14390]));

var G__14391 = (i__9718__auto___14390 + (1));
i__9718__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14388))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14388){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14388),args);
});})(g__14262__auto___14388))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14262__auto___14388){
return (function (seq14321){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14321));
});})(g__14262__auto___14388))
;


var g__14262__auto___14392 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__14262__auto___14392){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14393 = arguments.length;
var i__9718__auto___14394 = (0);
while(true){
if((i__9718__auto___14394 < len__9717__auto___14393)){
args__9724__auto__.push((arguments[i__9718__auto___14394]));

var G__14395 = (i__9718__auto___14394 + (1));
i__9718__auto___14394 = G__14395;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14392))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14392){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14392),args);
});})(g__14262__auto___14392))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__14262__auto___14392){
return (function (seq14322){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14322));
});})(g__14262__auto___14392))
;


var g__14262__auto___14396 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__14262__auto___14396){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14397 = arguments.length;
var i__9718__auto___14398 = (0);
while(true){
if((i__9718__auto___14398 < len__9717__auto___14397)){
args__9724__auto__.push((arguments[i__9718__auto___14398]));

var G__14399 = (i__9718__auto___14398 + (1));
i__9718__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14262__auto___14396))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14262__auto___14396){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14262__auto___14396),args);
});})(g__14262__auto___14396))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__14262__auto___14396){
return (function (seq14323){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14323));
});})(g__14262__auto___14396))
;

var g__14275__auto___14421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__14275__auto___14421){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14422 = arguments.length;
var i__9718__auto___14423 = (0);
while(true){
if((i__9718__auto___14423 < len__9717__auto___14422)){
args__9724__auto__.push((arguments[i__9718__auto___14423]));

var G__14424 = (i__9718__auto___14423 + (1));
i__9718__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14421))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14421){
return (function (args){
return cljs.core.deref(g__14275__auto___14421);
});})(g__14275__auto___14421))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__14275__auto___14421){
return (function (seq14400){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14400));
});})(g__14275__auto___14421))
;


var g__14275__auto___14425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__14275__auto___14425){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14426 = arguments.length;
var i__9718__auto___14427 = (0);
while(true){
if((i__9718__auto___14427 < len__9717__auto___14426)){
args__9724__auto__.push((arguments[i__9718__auto___14427]));

var G__14428 = (i__9718__auto___14427 + (1));
i__9718__auto___14427 = G__14428;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14425))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14425){
return (function (args){
return cljs.core.deref(g__14275__auto___14425);
});})(g__14275__auto___14425))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__14275__auto___14425){
return (function (seq14401){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14401));
});})(g__14275__auto___14425))
;


var g__14275__auto___14429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__14275__auto___14429){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14430 = arguments.length;
var i__9718__auto___14431 = (0);
while(true){
if((i__9718__auto___14431 < len__9717__auto___14430)){
args__9724__auto__.push((arguments[i__9718__auto___14431]));

var G__14432 = (i__9718__auto___14431 + (1));
i__9718__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14429))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14429){
return (function (args){
return cljs.core.deref(g__14275__auto___14429);
});})(g__14275__auto___14429))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__14275__auto___14429){
return (function (seq14402){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14402));
});})(g__14275__auto___14429))
;


var g__14275__auto___14433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__14275__auto___14433){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14434 = arguments.length;
var i__9718__auto___14435 = (0);
while(true){
if((i__9718__auto___14435 < len__9717__auto___14434)){
args__9724__auto__.push((arguments[i__9718__auto___14435]));

var G__14436 = (i__9718__auto___14435 + (1));
i__9718__auto___14435 = G__14436;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14433))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14433){
return (function (args){
return cljs.core.deref(g__14275__auto___14433);
});})(g__14275__auto___14433))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__14275__auto___14433){
return (function (seq14403){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14403));
});})(g__14275__auto___14433))
;


var g__14275__auto___14437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__14275__auto___14437){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14438 = arguments.length;
var i__9718__auto___14439 = (0);
while(true){
if((i__9718__auto___14439 < len__9717__auto___14438)){
args__9724__auto__.push((arguments[i__9718__auto___14439]));

var G__14440 = (i__9718__auto___14439 + (1));
i__9718__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14437))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14437){
return (function (args){
return cljs.core.deref(g__14275__auto___14437);
});})(g__14275__auto___14437))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__14275__auto___14437){
return (function (seq14404){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14404));
});})(g__14275__auto___14437))
;


var g__14275__auto___14441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__14275__auto___14441){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14442 = arguments.length;
var i__9718__auto___14443 = (0);
while(true){
if((i__9718__auto___14443 < len__9717__auto___14442)){
args__9724__auto__.push((arguments[i__9718__auto___14443]));

var G__14444 = (i__9718__auto___14443 + (1));
i__9718__auto___14443 = G__14444;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14441))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14441){
return (function (args){
return cljs.core.deref(g__14275__auto___14441);
});})(g__14275__auto___14441))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__14275__auto___14441){
return (function (seq14405){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14405));
});})(g__14275__auto___14441))
;


var g__14275__auto___14445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__14275__auto___14445){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14446 = arguments.length;
var i__9718__auto___14447 = (0);
while(true){
if((i__9718__auto___14447 < len__9717__auto___14446)){
args__9724__auto__.push((arguments[i__9718__auto___14447]));

var G__14448 = (i__9718__auto___14447 + (1));
i__9718__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14445))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14445){
return (function (args){
return cljs.core.deref(g__14275__auto___14445);
});})(g__14275__auto___14445))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__14275__auto___14445){
return (function (seq14406){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14406));
});})(g__14275__auto___14445))
;


var g__14275__auto___14449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__14275__auto___14449){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14450 = arguments.length;
var i__9718__auto___14451 = (0);
while(true){
if((i__9718__auto___14451 < len__9717__auto___14450)){
args__9724__auto__.push((arguments[i__9718__auto___14451]));

var G__14452 = (i__9718__auto___14451 + (1));
i__9718__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14449))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14449){
return (function (args){
return cljs.core.deref(g__14275__auto___14449);
});})(g__14275__auto___14449))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__14275__auto___14449){
return (function (seq14407){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14407));
});})(g__14275__auto___14449))
;


var g__14275__auto___14453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__14275__auto___14453){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14454 = arguments.length;
var i__9718__auto___14455 = (0);
while(true){
if((i__9718__auto___14455 < len__9717__auto___14454)){
args__9724__auto__.push((arguments[i__9718__auto___14455]));

var G__14456 = (i__9718__auto___14455 + (1));
i__9718__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14453))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14453){
return (function (args){
return cljs.core.deref(g__14275__auto___14453);
});})(g__14275__auto___14453))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__14275__auto___14453){
return (function (seq14408){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14408));
});})(g__14275__auto___14453))
;


var g__14275__auto___14457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__14275__auto___14457){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14458 = arguments.length;
var i__9718__auto___14459 = (0);
while(true){
if((i__9718__auto___14459 < len__9717__auto___14458)){
args__9724__auto__.push((arguments[i__9718__auto___14459]));

var G__14460 = (i__9718__auto___14459 + (1));
i__9718__auto___14459 = G__14460;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14457))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14457){
return (function (args){
return cljs.core.deref(g__14275__auto___14457);
});})(g__14275__auto___14457))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__14275__auto___14457){
return (function (seq14409){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14409));
});})(g__14275__auto___14457))
;


var g__14275__auto___14461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__14275__auto___14461){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14462 = arguments.length;
var i__9718__auto___14463 = (0);
while(true){
if((i__9718__auto___14463 < len__9717__auto___14462)){
args__9724__auto__.push((arguments[i__9718__auto___14463]));

var G__14464 = (i__9718__auto___14463 + (1));
i__9718__auto___14463 = G__14464;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14461))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14461){
return (function (args){
return cljs.core.deref(g__14275__auto___14461);
});})(g__14275__auto___14461))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__14275__auto___14461){
return (function (seq14410){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14410));
});})(g__14275__auto___14461))
;


var g__14275__auto___14465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__14275__auto___14465){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14466 = arguments.length;
var i__9718__auto___14467 = (0);
while(true){
if((i__9718__auto___14467 < len__9717__auto___14466)){
args__9724__auto__.push((arguments[i__9718__auto___14467]));

var G__14468 = (i__9718__auto___14467 + (1));
i__9718__auto___14467 = G__14468;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14465))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14465){
return (function (args){
return cljs.core.deref(g__14275__auto___14465);
});})(g__14275__auto___14465))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__14275__auto___14465){
return (function (seq14411){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14411));
});})(g__14275__auto___14465))
;


var g__14275__auto___14469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__14275__auto___14469){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14470 = arguments.length;
var i__9718__auto___14471 = (0);
while(true){
if((i__9718__auto___14471 < len__9717__auto___14470)){
args__9724__auto__.push((arguments[i__9718__auto___14471]));

var G__14472 = (i__9718__auto___14471 + (1));
i__9718__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14469))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14469){
return (function (args){
return cljs.core.deref(g__14275__auto___14469);
});})(g__14275__auto___14469))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__14275__auto___14469){
return (function (seq14412){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14412));
});})(g__14275__auto___14469))
;


var g__14275__auto___14473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__14275__auto___14473){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14474 = arguments.length;
var i__9718__auto___14475 = (0);
while(true){
if((i__9718__auto___14475 < len__9717__auto___14474)){
args__9724__auto__.push((arguments[i__9718__auto___14475]));

var G__14476 = (i__9718__auto___14475 + (1));
i__9718__auto___14475 = G__14476;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14473))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14473){
return (function (args){
return cljs.core.deref(g__14275__auto___14473);
});})(g__14275__auto___14473))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__14275__auto___14473){
return (function (seq14413){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14413));
});})(g__14275__auto___14473))
;


var g__14275__auto___14477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__14275__auto___14477){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14478 = arguments.length;
var i__9718__auto___14479 = (0);
while(true){
if((i__9718__auto___14479 < len__9717__auto___14478)){
args__9724__auto__.push((arguments[i__9718__auto___14479]));

var G__14480 = (i__9718__auto___14479 + (1));
i__9718__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14477))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14477){
return (function (args){
return cljs.core.deref(g__14275__auto___14477);
});})(g__14275__auto___14477))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__14275__auto___14477){
return (function (seq14414){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14414));
});})(g__14275__auto___14477))
;


var g__14275__auto___14481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__14275__auto___14481){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14482 = arguments.length;
var i__9718__auto___14483 = (0);
while(true){
if((i__9718__auto___14483 < len__9717__auto___14482)){
args__9724__auto__.push((arguments[i__9718__auto___14483]));

var G__14484 = (i__9718__auto___14483 + (1));
i__9718__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14481))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14481){
return (function (args){
return cljs.core.deref(g__14275__auto___14481);
});})(g__14275__auto___14481))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__14275__auto___14481){
return (function (seq14415){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14415));
});})(g__14275__auto___14481))
;


var g__14275__auto___14485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__14275__auto___14485){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14486 = arguments.length;
var i__9718__auto___14487 = (0);
while(true){
if((i__9718__auto___14487 < len__9717__auto___14486)){
args__9724__auto__.push((arguments[i__9718__auto___14487]));

var G__14488 = (i__9718__auto___14487 + (1));
i__9718__auto___14487 = G__14488;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14485))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14485){
return (function (args){
return cljs.core.deref(g__14275__auto___14485);
});})(g__14275__auto___14485))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__14275__auto___14485){
return (function (seq14416){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14416));
});})(g__14275__auto___14485))
;


var g__14275__auto___14489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__14275__auto___14489){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14490 = arguments.length;
var i__9718__auto___14491 = (0);
while(true){
if((i__9718__auto___14491 < len__9717__auto___14490)){
args__9724__auto__.push((arguments[i__9718__auto___14491]));

var G__14492 = (i__9718__auto___14491 + (1));
i__9718__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14489))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14489){
return (function (args){
return cljs.core.deref(g__14275__auto___14489);
});})(g__14275__auto___14489))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__14275__auto___14489){
return (function (seq14417){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14417));
});})(g__14275__auto___14489))
;


var g__14275__auto___14493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__14275__auto___14493){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14494 = arguments.length;
var i__9718__auto___14495 = (0);
while(true){
if((i__9718__auto___14495 < len__9717__auto___14494)){
args__9724__auto__.push((arguments[i__9718__auto___14495]));

var G__14496 = (i__9718__auto___14495 + (1));
i__9718__auto___14495 = G__14496;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14493))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14493){
return (function (args){
return cljs.core.deref(g__14275__auto___14493);
});})(g__14275__auto___14493))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__14275__auto___14493){
return (function (seq14418){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14418));
});})(g__14275__auto___14493))
;


var g__14275__auto___14497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__14275__auto___14497){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14498 = arguments.length;
var i__9718__auto___14499 = (0);
while(true){
if((i__9718__auto___14499 < len__9717__auto___14498)){
args__9724__auto__.push((arguments[i__9718__auto___14499]));

var G__14500 = (i__9718__auto___14499 + (1));
i__9718__auto___14499 = G__14500;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14497))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14497){
return (function (args){
return cljs.core.deref(g__14275__auto___14497);
});})(g__14275__auto___14497))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__14275__auto___14497){
return (function (seq14419){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14419));
});})(g__14275__auto___14497))
;


var g__14275__auto___14501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__14275__auto___14501){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14502 = arguments.length;
var i__9718__auto___14503 = (0);
while(true){
if((i__9718__auto___14503 < len__9717__auto___14502)){
args__9724__auto__.push((arguments[i__9718__auto___14503]));

var G__14504 = (i__9718__auto___14503 + (1));
i__9718__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});})(g__14275__auto___14501))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14275__auto___14501){
return (function (args){
return cljs.core.deref(g__14275__auto___14501);
});})(g__14275__auto___14501))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__14275__auto___14501){
return (function (seq14420){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14420));
});})(g__14275__auto___14501))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9724__auto__ = [];
var len__9717__auto___14507 = arguments.length;
var i__9718__auto___14508 = (0);
while(true){
if((i__9718__auto___14508 < len__9717__auto___14507)){
args__9724__auto__.push((arguments[i__9718__auto___14508]));

var G__14509 = (i__9718__auto___14508 + (1));
i__9718__auto___14508 = G__14509;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__14505_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14505_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14506){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14506));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__14510_SHARP_){
return (new Date(p1__14510_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
