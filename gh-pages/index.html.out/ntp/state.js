// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ntp.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ntp.math');
goog.require('ajax.core');
goog.require('ntp.data');
goog.require('hoplon.core');
goog.require('javelin.core');
if(typeof ntp.state.t0 !== 'undefined'){
} else {
ntp.state.t0 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof ntp.state.t1 !== 'undefined'){
} else {
ntp.state.t1 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof ntp.state.t2 !== 'undefined'){
} else {
ntp.state.t2 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof ntp.state.t3 !== 'undefined'){
} else {
ntp.state.t3 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
}
ntp.state.set_times_BANG_ = (function ntp$state$set_times_BANG_(t0_SINGLEQUOTE_,t1_SINGLEQUOTE_,t2_SINGLEQUOTE_,t3_SINGLEQUOTE_){
return javelin.core.dosync_STAR_((function (){
cljs.core.reset_BANG_(ntp.state.t0,t0_SINGLEQUOTE_);

cljs.core.reset_BANG_(ntp.state.t1,t1_SINGLEQUOTE_);

cljs.core.reset_BANG_(ntp.state.t2,t2_SINGLEQUOTE_);

return cljs.core.reset_BANG_(ntp.state.t3,t3_SINGLEQUOTE_);
}));
});
ntp.state.ready_QMARK_ = (function (){var fexpr__20076 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20073,G__20072,G__20074,G__20075){
var and__8426__auto__ = G__20072;
if(cljs.core.truth_(and__8426__auto__)){
var and__8426__auto____$1 = G__20073;
if(cljs.core.truth_(and__8426__auto____$1)){
var and__8426__auto____$2 = G__20074;
if(cljs.core.truth_(and__8426__auto____$2)){
return G__20075;
} else {
return and__8426__auto____$2;
}
} else {
return and__8426__auto____$1;
}
} else {
return and__8426__auto__;
}
}));
return (fexpr__20076.cljs$core$IFn$_invoke$arity$4 ? fexpr__20076.cljs$core$IFn$_invoke$arity$4(ntp.state.t1,ntp.state.t0,ntp.state.t2,ntp.state.t3) : fexpr__20076.call(null,ntp.state.t1,ntp.state.t0,ntp.state.t2,ntp.state.t3));
})();
ntp.state.round_trip = (function (){var fexpr__20083 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20080,G__20077,G__20079,G__20081,G__20078,G__20082){
if(cljs.core.truth_(G__20077)){
return (G__20078.cljs$core$IFn$_invoke$arity$4 ? G__20078.cljs$core$IFn$_invoke$arity$4(G__20079,G__20080,G__20081,G__20082) : G__20078.call(null,G__20079,G__20080,G__20081,G__20082));
} else {
return null;
}
}));
return (fexpr__20083.cljs$core$IFn$_invoke$arity$6 ? fexpr__20083.cljs$core$IFn$_invoke$arity$6(ntp.state.t1,ntp.state.ready_QMARK_,ntp.state.t0,ntp.state.t2,ntp.math.round_trip,ntp.state.t3) : fexpr__20083.call(null,ntp.state.t1,ntp.state.ready_QMARK_,ntp.state.t0,ntp.state.t2,ntp.math.round_trip,ntp.state.t3));
})();
ntp.state.offset = (function (){var fexpr__20090 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20087,G__20084,G__20086,G__20088,G__20085,G__20089){
if(cljs.core.truth_(G__20084)){
return (G__20085.cljs$core$IFn$_invoke$arity$4 ? G__20085.cljs$core$IFn$_invoke$arity$4(G__20086,G__20087,G__20088,G__20089) : G__20085.call(null,G__20086,G__20087,G__20088,G__20089));
} else {
return (0);
}
}));
return (fexpr__20090.cljs$core$IFn$_invoke$arity$6 ? fexpr__20090.cljs$core$IFn$_invoke$arity$6(ntp.state.t1,ntp.state.ready_QMARK_,ntp.state.t0,ntp.state.t2,ntp.math.offset,ntp.state.t3) : fexpr__20090.call(null,ntp.state.t1,ntp.state.ready_QMARK_,ntp.state.t0,ntp.state.t2,ntp.math.offset,ntp.state.t3));
})();
ntp.state.sync_times = (function ntp$state$sync_times(){
var t0 = (new Date()).getTime();
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://rest.ably.io/time",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,((function (t0){
return (function (p__20091){
var vec__20092 = p__20091;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20092,(0),null);
return ntp.state.set_times_BANG_(t0,r,r,(new Date()).getTime());
});})(t0))
,cljs.core.cst$kw$finally,((function (t0){
return (function (){
var G__20095 = ((function (t0){
return (function (){
return (ntp.state.sync_times.cljs$core$IFn$_invoke$arity$0 ? ntp.state.sync_times.cljs$core$IFn$_invoke$arity$0() : ntp.state.sync_times.call(null));
});})(t0))
;
var G__20096 = ntp.data.poll_interval;
return setTimeout(G__20095,G__20096);
});})(t0))
], null)], 0));
});
ntp.state.sync_times();
