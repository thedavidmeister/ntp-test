// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ntp.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ntp.state');
goog.require('cljs.test');
ntp.core.now_millis = (function ntp$core$now_millis(){
return (new Date()).getTime();
});
ntp.core.server_now = (function ntp$core$server_now(){
var G__20099 = ((new Date()).getTime() + cljs.core.deref(ntp.state.offset));
return Math.floor(G__20099);
});
ntp.core._QMARK__QMARK_server_now = (function ntp$core$_QMARK__QMARK_server_now(){
return cljs.test.test_var(ntp.core._QMARK__QMARK_server_now.cljs$lang$var);
});
ntp.core._QMARK__QMARK_server_now.cljs$lang$test = (function (){
try{var values__18435__auto__ = (function (){var x__9392__auto__ = ntp.core.server_now();
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto__);
})();
var result__18436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_int_QMARK_,values__18435__auto__);
if(cljs.core.truth_(result__18436__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$pos_DASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$server_DASH_now)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.pos_int_QMARK_,values__18435__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$pos_DASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$server_DASH_now)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9392__auto__ = cljs.core.cons(cljs.core.cst$sym$pos_DASH_int_QMARK_,values__18435__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9392__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18436__auto__;
}catch (e20100){var t__18480__auto__ = e20100;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$pos_DASH_int_QMARK_,cljs.core.list(cljs.core.cst$sym$server_DASH_now)),cljs.core.cst$kw$actual,t__18480__auto__,cljs.core.cst$kw$message,null], null));
}});

ntp.core._QMARK__QMARK_server_now.cljs$lang$var = new cljs.core.Var(function(){return ntp.core._QMARK__QMARK_server_now;},cljs.core.cst$sym$ntp$core_SLASH__QMARK__QMARK_server_DASH_now,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$ntp$core,cljs.core.cst$sym$_QMARK__QMARK_server_DASH_now,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/azs/-pm147t/ntp/core.cljc",22,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(ntp.core._QMARK__QMARK_server_now)?ntp.core._QMARK__QMARK_server_now.cljs$lang$test:null)]));
