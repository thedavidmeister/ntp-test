// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__18934){
var vec__18935 = p__18934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18935,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__18938 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18938,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18938,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18938,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__18942 = arguments.length;
switch (G__18942) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8790__auto__ = cljs.core.count(a);
var y__8791__auto__ = cljs.core.count(b);
return ((x__8790__auto__ > y__8791__auto__) ? x__8790__auto__ : y__8791__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9171__auto__ = (((x == null))?null:x);
var m__9172__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9172__auto__.call(null,x));
} else {
var m__9172__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9172__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9171__auto__ = (((a == null))?null:a);
var m__9172__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9172__auto__.call(null,a,b));
} else {
var m__9172__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9172__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__18944_18968 = clojure.data.equality_partition;
var G__18945_18969 = "null";
var G__18946_18970 = ((function (G__18944_18968,G__18945_18969){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18944_18968,G__18945_18969))
;
goog.object.set(G__18944_18968,G__18945_18969,G__18946_18970);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__18947_18971 = clojure.data.equality_partition;
var G__18948_18972 = "string";
var G__18949_18973 = ((function (G__18947_18971,G__18948_18972){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18947_18971,G__18948_18972))
;
goog.object.set(G__18947_18971,G__18948_18972,G__18949_18973);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__18950_18974 = clojure.data.equality_partition;
var G__18951_18975 = "number";
var G__18952_18976 = ((function (G__18950_18974,G__18951_18975){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18950_18974,G__18951_18975))
;
goog.object.set(G__18950_18974,G__18951_18975,G__18952_18976);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__18953_18977 = clojure.data.equality_partition;
var G__18954_18978 = "array";
var G__18955_18979 = ((function (G__18953_18977,G__18954_18978){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__18953_18977,G__18954_18978))
;
goog.object.set(G__18953_18977,G__18954_18978,G__18955_18979);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__18956_18980 = clojure.data.equality_partition;
var G__18957_18981 = "function";
var G__18958_18982 = ((function (G__18956_18980,G__18957_18981){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18956_18980,G__18957_18981))
;
goog.object.set(G__18956_18980,G__18957_18981,G__18958_18982);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__18959_18983 = clojure.data.equality_partition;
var G__18960_18984 = "boolean";
var G__18961_18985 = ((function (G__18959_18983,G__18960_18984){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18959_18983,G__18960_18984))
;
goog.object.set(G__18959_18983,G__18960_18984,G__18961_18985);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__18962_18986 = clojure.data.equality_partition;
var G__18963_18987 = "_";
var G__18964_18988 = ((function (G__18962_18986,G__18963_18987){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__18962_18986,G__18963_18987))
;
goog.object.set(G__18962_18986,G__18963_18987,G__18964_18988);
goog.object.set(clojure.data.Diff,"null",true);

var G__18989_19013 = clojure.data.diff_similar;
var G__18990_19014 = "null";
var G__18991_19015 = ((function (G__18989_19013,G__18990_19014){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18989_19013,G__18990_19014))
;
goog.object.set(G__18989_19013,G__18990_19014,G__18991_19015);

goog.object.set(clojure.data.Diff,"string",true);

var G__18992_19016 = clojure.data.diff_similar;
var G__18993_19017 = "string";
var G__18994_19018 = ((function (G__18992_19016,G__18993_19017){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18992_19016,G__18993_19017))
;
goog.object.set(G__18992_19016,G__18993_19017,G__18994_19018);

goog.object.set(clojure.data.Diff,"number",true);

var G__18995_19019 = clojure.data.diff_similar;
var G__18996_19020 = "number";
var G__18997_19021 = ((function (G__18995_19019,G__18996_19020){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18995_19019,G__18996_19020))
;
goog.object.set(G__18995_19019,G__18996_19020,G__18997_19021);

goog.object.set(clojure.data.Diff,"array",true);

var G__18998_19022 = clojure.data.diff_similar;
var G__18999_19023 = "array";
var G__19000_19024 = ((function (G__18998_19022,G__18999_19023){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18998_19022,G__18999_19023))
;
goog.object.set(G__18998_19022,G__18999_19023,G__19000_19024);

goog.object.set(clojure.data.Diff,"function",true);

var G__19001_19025 = clojure.data.diff_similar;
var G__19002_19026 = "function";
var G__19003_19027 = ((function (G__19001_19025,G__19002_19026){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19001_19025,G__19002_19026))
;
goog.object.set(G__19001_19025,G__19002_19026,G__19003_19027);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__19004_19028 = clojure.data.diff_similar;
var G__19005_19029 = "boolean";
var G__19006_19030 = ((function (G__19004_19028,G__19005_19029){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19004_19028,G__19005_19029))
;
goog.object.set(G__19004_19028,G__19005_19029,G__19006_19030);

goog.object.set(clojure.data.Diff,"_",true);

var G__19007_19031 = clojure.data.diff_similar;
var G__19008_19032 = "_";
var G__19009_19033 = ((function (G__19007_19031,G__19008_19032){
return (function (a,b){
var fexpr__19011 = (function (){var G__19012 = clojure.data.equality_partition(a);
var G__19012__$1 = (((G__19012 instanceof cljs.core.Keyword))?G__19012.fqn:null);
switch (G__19012__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19012__$1)].join('')));

}
})();
return (fexpr__19011.cljs$core$IFn$_invoke$arity$2 ? fexpr__19011.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__19011.call(null,a,b));
});})(G__19007_19031,G__19008_19032))
;
goog.object.set(G__19007_19031,G__19008_19032,G__19009_19033);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
