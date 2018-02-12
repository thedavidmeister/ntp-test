// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('ntp.core');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__20103 = (function (){var G__20105 = "SNTP time:";
var G__20106 = (function (){var t = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var G__20107_20113 = ((function (t,G__20105){
return (function (){
return cljs.core.reset_BANG_(t,ntp.core.server_now());
});})(t,G__20105))
;
var G__20108_20114 = (0);
setInterval(G__20107_20113,G__20108_20114);

return t;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20105,G__20106) : hoplon.core.div.call(null,G__20105,G__20106));
})();
var G__20104 = (function (){var G__20109 = "Local time:";
var G__20110 = (function (){var t = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var G__20111_20115 = ((function (t,G__20109,G__20103){
return (function (){
return cljs.core.reset_BANG_(t,(new Date()).getTime());
});})(t,G__20109,G__20103))
;
var G__20112_20116 = (0);
setInterval(G__20111_20115,G__20112_20116);

return t;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20109,G__20110) : hoplon.core.div.call(null,G__20109,G__20110));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__20103,G__20104) : hoplon.core.body.call(null,G__20103,G__20104));
})()], 0));
