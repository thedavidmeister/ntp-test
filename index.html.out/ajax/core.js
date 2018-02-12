// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16122 = arguments.length;
var i__9718__auto___16123 = (0);
while(true){
if((i__9718__auto___16123 < len__9717__auto___16122)){
args__9724__auto__.push((arguments[i__9718__auto___16123]));

var G__16124 = (i__9718__auto___16123 + (1));
i__9718__auto___16123 = G__16124;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq16120){
var G__16121 = cljs.core.first(seq16120);
var seq16120__$1 = cljs.core.next(seq16120);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__16121,seq16120__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16127 = arguments.length;
var i__9718__auto___16128 = (0);
while(true){
if((i__9718__auto___16128 < len__9717__auto___16127)){
args__9724__auto__.push((arguments[i__9718__auto___16128]));

var G__16129 = (i__9718__auto___16128 + (1));
i__9718__auto___16128 = G__16129;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq16125){
var G__16126 = cljs.core.first(seq16125);
var seq16125__$1 = cljs.core.next(seq16125);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__16126,seq16125__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16132 = arguments.length;
var i__9718__auto___16133 = (0);
while(true){
if((i__9718__auto___16133 < len__9717__auto___16132)){
args__9724__auto__.push((arguments[i__9718__auto___16133]));

var G__16134 = (i__9718__auto___16133 + (1));
i__9718__auto___16133 = G__16134;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq16130){
var G__16131 = cljs.core.first(seq16130);
var seq16130__$1 = cljs.core.next(seq16130);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__16131,seq16130__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16137 = arguments.length;
var i__9718__auto___16138 = (0);
while(true){
if((i__9718__auto___16138 < len__9717__auto___16137)){
args__9724__auto__.push((arguments[i__9718__auto___16138]));

var G__16139 = (i__9718__auto___16138 + (1));
i__9718__auto___16138 = G__16139;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq16135){
var G__16136 = cljs.core.first(seq16135);
var seq16135__$1 = cljs.core.next(seq16135);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__16136,seq16135__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16142 = arguments.length;
var i__9718__auto___16143 = (0);
while(true){
if((i__9718__auto___16143 < len__9717__auto___16142)){
args__9724__auto__.push((arguments[i__9718__auto___16143]));

var G__16144 = (i__9718__auto___16143 + (1));
i__9718__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq16140){
var G__16141 = cljs.core.first(seq16140);
var seq16140__$1 = cljs.core.next(seq16140);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__16141,seq16140__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16147 = arguments.length;
var i__9718__auto___16148 = (0);
while(true){
if((i__9718__auto___16148 < len__9717__auto___16147)){
args__9724__auto__.push((arguments[i__9718__auto___16148]));

var G__16149 = (i__9718__auto___16148 + (1));
i__9718__auto___16148 = G__16149;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq16145){
var G__16146 = cljs.core.first(seq16145);
var seq16145__$1 = cljs.core.next(seq16145);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__16146,seq16145__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16152 = arguments.length;
var i__9718__auto___16153 = (0);
while(true){
if((i__9718__auto___16153 < len__9717__auto___16152)){
args__9724__auto__.push((arguments[i__9718__auto___16153]));

var G__16154 = (i__9718__auto___16153 + (1));
i__9718__auto___16153 = G__16154;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq16150){
var G__16151 = cljs.core.first(seq16150);
var seq16150__$1 = cljs.core.next(seq16150);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__16151,seq16150__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16157 = arguments.length;
var i__9718__auto___16158 = (0);
while(true){
if((i__9718__auto___16158 < len__9717__auto___16157)){
args__9724__auto__.push((arguments[i__9718__auto___16158]));

var G__16159 = (i__9718__auto___16158 + (1));
i__9718__auto___16158 = G__16159;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq16155){
var G__16156 = cljs.core.first(seq16155);
var seq16155__$1 = cljs.core.next(seq16155);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__16156,seq16155__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__9724__auto__ = [];
var len__9717__auto___16162 = arguments.length;
var i__9718__auto___16163 = (0);
while(true){
if((i__9718__auto___16163 < len__9717__auto___16162)){
args__9724__auto__.push((arguments[i__9718__auto___16163]));

var G__16164 = (i__9718__auto___16163 + (1));
i__9718__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__15657__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__15657__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__15657__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq16160){
var G__16161 = cljs.core.first(seq16160);
var seq16160__$1 = cljs.core.next(seq16160);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__16161,seq16160__$1);
});

