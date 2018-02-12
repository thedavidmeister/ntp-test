// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ntp.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
ntp.math.round_trip = (function ntp$math$round_trip(t0,t1,t2,t3){
return ((t3 - t0) - (t2 - t1));
});
ntp.math.offset = (function ntp$math$offset(t0,t1,t2,t3){
return (((t1 - t0) + (t2 - t3)) / (2));
});
ntp.math._QMARK__QMARK_round_trip = (function ntp$math$_QMARK__QMARK_round_trip(){
return cljs.test.test_var(ntp.math._QMARK__QMARK_round_trip.cljs$lang$var);
});
ntp.math._QMARK__QMARK_round_trip.cljs$lang$test = (function (){
var t0 = cljs.core.rand_int((10000));
var i0 = cljs.core.rand_int((10000));
var t1 = (t0 + i0);
var i1 = cljs.core.rand_int((10000));
var t2 = (t1 + i1);
var i2 = cljs.core.rand_int((10000));
var t3 = (t2 + i2);
try{var values__18435__auto__ = (function (){var x__9392__auto__ = (i0 + i2);
return cljs.core._conj((function (){var x__9392__auto____$1 = ntp.math.round_trip(t0,t1,t2,t3);
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto____$1);
})(),x__9392__auto__);
})();
var result__18436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18435__auto__);
if(cljs.core.truth_(result__18436__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),cljs.core.list(cljs.core.cst$sym$round_DASH_trip,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18435__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),cljs.core.list(cljs.core.cst$sym$round_DASH_trip,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9392__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18435__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18436__auto__;
}catch (e20068){var t__18480__auto__ = e20068;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),cljs.core.list(cljs.core.cst$sym$round_DASH_trip,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,t__18480__auto__,cljs.core.cst$kw$message,null], null));
}});

ntp.math._QMARK__QMARK_round_trip.cljs$lang$var = new cljs.core.Var(function(){return ntp.math._QMARK__QMARK_round_trip;},cljs.core.cst$sym$ntp$math_SLASH__QMARK__QMARK_round_DASH_trip,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$ntp$math,cljs.core.cst$sym$_QMARK__QMARK_round_DASH_trip,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/azs/-pm147t/ntp/math.cljc",22,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(ntp.math._QMARK__QMARK_round_trip)?ntp.math._QMARK__QMARK_round_trip.cljs$lang$test:null)]));
ntp.math._QMARK__QMARK_offset = (function ntp$math$_QMARK__QMARK_offset(){
return cljs.test.test_var(ntp.math._QMARK__QMARK_offset.cljs$lang$var);
});
ntp.math._QMARK__QMARK_offset.cljs$lang$test = (function (){
var t0 = cljs.core.rand_int((10000));
var i0 = cljs.core.rand_int((10000));
var t1 = (t0 + i0);
var i1 = cljs.core.rand_int((10000));
var t2 = (t1 + i1);
var i2 = cljs.core.rand_int((10000));
var t3 = (t2 + i2);
try{var values__18435__auto__ = (function (){var x__9392__auto__ = ((i0 - i2) / (2));
return cljs.core._conj((function (){var x__9392__auto____$1 = ntp.math.offset(t0,t1,t2,t3);
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto____$1);
})(),x__9392__auto__);
})();
var result__18436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18435__auto__);
if(cljs.core.truth_(result__18436__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),(2)),cljs.core.list(cljs.core.cst$sym$offset,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18435__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),(2)),cljs.core.list(cljs.core.cst$sym$offset,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9392__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18435__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18436__auto__;
}catch (e20069){var t__18480__auto__ = e20069;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$i0,cljs.core.cst$sym$i2),(2)),cljs.core.list(cljs.core.cst$sym$offset,cljs.core.cst$sym$t0,cljs.core.cst$sym$t1,cljs.core.cst$sym$t2,cljs.core.cst$sym$t3)),cljs.core.cst$kw$actual,t__18480__auto__,cljs.core.cst$kw$message,null], null));
}});

ntp.math._QMARK__QMARK_offset.cljs$lang$var = new cljs.core.Var(function(){return ntp.math._QMARK__QMARK_offset;},cljs.core.cst$sym$ntp$math_SLASH__QMARK__QMARK_offset,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$ntp$math,cljs.core.cst$sym$_QMARK__QMARK_offset,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/azs/-pm147t/ntp/math.cljc",18,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(ntp.math._QMARK__QMARK_offset)?ntp.math._QMARK__QMARK_offset.cljs$lang$test:null)]));
