// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__15831 = e.target.readyState;
var fexpr__15830 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__15830.cljs$core$IFn$_invoke$arity$1 ? fexpr__15830.cljs$core$IFn$_invoke$arity$1(G__15831) : fexpr__15830.call(null,G__15831));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15833,handler){
var map__15834 = p__15833;
var map__15834__$1 = ((((!((map__15834 == null)))?((((map__15834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15834):map__15834);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15834__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15834__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15834,map__15834__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15832_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__15832_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__15834,map__15834__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___15846 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___15846)){
var response_type_15847 = temp__5457__auto___15846;
this$__$1.responseType = cljs.core.name(response_type_15847);
} else {
}

var seq__15836_15848 = cljs.core.seq(headers);
var chunk__15837_15849 = null;
var count__15838_15850 = (0);
var i__15839_15851 = (0);
while(true){
if((i__15839_15851 < count__15838_15850)){
var vec__15840_15852 = chunk__15837_15849.cljs$core$IIndexed$_nth$arity$2(null,i__15839_15851);
var k_15853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15852,(0),null);
var v_15854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15840_15852,(1),null);
this$__$1.setRequestHeader(k_15853,v_15854);

var G__15855 = seq__15836_15848;
var G__15856 = chunk__15837_15849;
var G__15857 = count__15838_15850;
var G__15858 = (i__15839_15851 + (1));
seq__15836_15848 = G__15855;
chunk__15837_15849 = G__15856;
count__15838_15850 = G__15857;
i__15839_15851 = G__15858;
continue;
} else {
var temp__5457__auto___15859 = cljs.core.seq(seq__15836_15848);
if(temp__5457__auto___15859){
var seq__15836_15860__$1 = temp__5457__auto___15859;
if(cljs.core.chunked_seq_QMARK_(seq__15836_15860__$1)){
var c__9369__auto___15861 = cljs.core.chunk_first(seq__15836_15860__$1);
var G__15862 = cljs.core.chunk_rest(seq__15836_15860__$1);
var G__15863 = c__9369__auto___15861;
var G__15864 = cljs.core.count(c__9369__auto___15861);
var G__15865 = (0);
seq__15836_15848 = G__15862;
chunk__15837_15849 = G__15863;
count__15838_15850 = G__15864;
i__15839_15851 = G__15865;
continue;
} else {
var vec__15843_15866 = cljs.core.first(seq__15836_15860__$1);
var k_15867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843_15866,(0),null);
var v_15868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15843_15866,(1),null);
this$__$1.setRequestHeader(k_15867,v_15868);

var G__15869 = cljs.core.next(seq__15836_15860__$1);
var G__15870 = null;
var G__15871 = (0);
var G__15872 = (0);
seq__15836_15848 = G__15869;
chunk__15837_15849 = G__15870;
count__15838_15850 = G__15871;
i__15839_15851 = G__15872;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8438__auto__ = body;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
