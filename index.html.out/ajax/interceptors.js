// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9126__auto__,k__9127__auto__){
var self__ = this;
var this__9126__auto____$1 = this;
return this__9126__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9127__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9128__auto__,k15666,else__9129__auto__){
var self__ = this;
var this__9128__auto____$1 = this;
var G__15670 = k15666;
var G__15670__$1 = (((G__15670 instanceof cljs.core.Keyword))?G__15670.fqn:null);
switch (G__15670__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15666,else__9129__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__15671,opts){
var self__ = this;
var map__15672 = p__15671;
var map__15672__$1 = ((((!((map__15672 == null)))?((((map__15672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15672):map__15672);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15672__$1,cljs.core.cst$kw$request);
var map__15674 = this;
var map__15674__$1 = ((((!((map__15674 == null)))?((((map__15674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15674):map__15674);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15674__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__15676,xhrio){
var self__ = this;
var map__15677 = p__15676;
var map__15677__$1 = ((((!((map__15677 == null)))?((((map__15677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15677):map__15677);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15677__$1,cljs.core.cst$kw$response);
var map__15679 = this;
var map__15679__$1 = ((((!((map__15679 == null)))?((((map__15679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15679):map__15679);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15679__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9140__auto__,writer__9141__auto__,opts__9142__auto__){
var self__ = this;
var this__9140__auto____$1 = this;
var pr_pair__9143__auto__ = ((function (this__9140__auto____$1){
return (function (keyval__9144__auto__){
return cljs.core.pr_sequential_writer(writer__9141__auto__,cljs.core.pr_writer,""," ","",opts__9142__auto__,keyval__9144__auto__);
});})(this__9140__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9141__auto__,pr_pair__9143__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__9142__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15665){
var self__ = this;
var G__15665__$1 = this;
return (new cljs.core.RecordIter((0),G__15665__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9124__auto__){
var self__ = this;
var this__9124__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9121__auto__){
var self__ = this;
var this__9121__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9130__auto__){
var self__ = this;
var this__9130__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9122__auto__){
var self__ = this;
var this__9122__auto____$1 = this;
var h__8894__auto__ = self__.__hash;
if(!((h__8894__auto__ == null))){
return h__8894__auto__;
} else {
var h__8894__auto____$1 = (function (){var fexpr__15681 = ((function (h__8894__auto__,this__9122__auto____$1){
return (function (coll__9123__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__9123__auto__));
});})(h__8894__auto__,this__9122__auto____$1))
;
return fexpr__15681(this__9122__auto____$1);
})();
self__.__hash = h__8894__auto____$1;

return h__8894__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15667,other15668){
var self__ = this;
var this15667__$1 = this;
return (!((other15668 == null))) && ((this15667__$1.constructor === other15668.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15667__$1.name,other15668.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15667__$1.request,other15668.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15667__$1.response,other15668.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15667__$1.__extmap,other15668.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9135__auto__,k__9136__auto__){
var self__ = this;
var this__9135__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__9136__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9135__auto____$1),self__.__meta),k__9136__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9136__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9133__auto__,k__9134__auto__,G__15665){
var self__ = this;
var this__9133__auto____$1 = this;
var pred__15682 = cljs.core.keyword_identical_QMARK_;
var expr__15683 = k__9134__auto__;
if(cljs.core.truth_((function (){var G__15685 = cljs.core.cst$kw$name;
var G__15686 = expr__15683;
return (pred__15682.cljs$core$IFn$_invoke$arity$2 ? pred__15682.cljs$core$IFn$_invoke$arity$2(G__15685,G__15686) : pred__15682.call(null,G__15685,G__15686));
})())){
return (new ajax.interceptors.StandardInterceptor(G__15665,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15687 = cljs.core.cst$kw$request;
var G__15688 = expr__15683;
return (pred__15682.cljs$core$IFn$_invoke$arity$2 ? pred__15682.cljs$core$IFn$_invoke$arity$2(G__15687,G__15688) : pred__15682.call(null,G__15687,G__15688));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__15665,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15689 = cljs.core.cst$kw$response;
var G__15690 = expr__15683;
return (pred__15682.cljs$core$IFn$_invoke$arity$2 ? pred__15682.cljs$core$IFn$_invoke$arity$2(G__15689,G__15690) : pred__15682.call(null,G__15689,G__15690));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__15665,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9134__auto__,G__15665),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9138__auto__){
var self__ = this;
var this__9138__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9125__auto__,G__15665){
var self__ = this;
var this__9125__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__15665,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9131__auto__,entry__9132__auto__){
var self__ = this;
var this__9131__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9132__auto__)){
return this__9131__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9131__auto____$1,entry__9132__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__9164__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__9164__auto__,writer__9165__auto__){
return cljs.core._write(writer__9165__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__15669){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__15669),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__15669),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__15669),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15669,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__15692,xhrio){
var map__15693 = p__15692;
var map__15693__$1 = ((((!((map__15693 == null)))?((((map__15693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15693):map__15693);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15693__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__9724__auto__ = [];
var len__9717__auto___15699 = arguments.length;
var i__9718__auto___15700 = (0);
while(true){
if((i__9718__auto___15700 < len__9717__auto___15699)){
args__9724__auto__.push((arguments[i__9718__auto___15700]));

var G__15701 = (i__9718__auto___15700 + (1));
i__9718__auto___15700 = G__15701;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((3) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9725__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq15695){
var G__15696 = cljs.core.first(seq15695);
var seq15695__$1 = cljs.core.next(seq15695);
var G__15697 = cljs.core.first(seq15695__$1);
var seq15695__$2 = cljs.core.next(seq15695__$1);
var G__15698 = cljs.core.first(seq15695__$2);
var seq15695__$3 = cljs.core.next(seq15695__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__15696,G__15697,G__15698,seq15695__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9126__auto__,k__9127__auto__){
var self__ = this;
var this__9126__auto____$1 = this;
return this__9126__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9127__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9128__auto__,k15704,else__9129__auto__){
var self__ = this;
var this__9128__auto____$1 = this;
var G__15708 = k15704;
var G__15708__$1 = (((G__15708 instanceof cljs.core.Keyword))?G__15708.fqn:null);
switch (G__15708__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15704,else__9129__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__15709,request){
var self__ = this;
var map__15710 = p__15709;
var map__15710__$1 = ((((!((map__15710 == null)))?((((map__15710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15710):map__15710);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15710__$1,cljs.core.cst$kw$content_DASH_type);
var map__15712 = this;
var map__15712__$1 = ((((!((map__15712 == null)))?((((map__15712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15712):map__15712);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15712__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__15712,map__15712__$1,content_type__$2,map__15710,map__15710__$1,content_type__$1){
return (function (p1__15702_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__8438__auto__ = p1__15702_SHARP_;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__15712,map__15712__$1,content_type__$2,map__15710,map__15710__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__15714,xhrio){
var self__ = this;
var map__15715 = p__15714;
var map__15715__$1 = ((((!((map__15715 == null)))?((((map__15715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15715):map__15715);
var format = map__15715__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15715__$1,cljs.core.cst$kw$read);
var map__15717 = this;
var map__15717__$1 = ((((!((map__15717 == null)))?((((map__15717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15717):map__15717);
var format__$1 = map__15717__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15717__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__15720 = status;
switch (G__15720) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__15721 = "Request failed.";
var G__15722 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__15721,G__15722) : fail.call(null,G__15721,G__15722));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__15723 = "Request aborted by client.";
var G__15724 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__15723,G__15724) : fail.call(null,G__15723,G__15724));
} else {
var G__15725 = "Request timed out.";
var G__15726 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__15725,G__15726) : fail.call(null,G__15725,G__15726));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__15728 = ajax.protocols._status_text(xhrio);
var G__15729 = cljs.core.cst$kw$error;
var G__15730 = cljs.core.cst$kw$response;
var G__15731 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__15728,G__15729,G__15730,G__15731) : fail.call(null,G__15728,G__15729,G__15730,G__15731));
}
}catch (e15727){if((e15727 instanceof Object)){
var e = e15727;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e15727;

}
}
}
}catch (e15719){if((e15719 instanceof Object)){
var e = e15719;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e15719;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9140__auto__,writer__9141__auto__,opts__9142__auto__){
var self__ = this;
var this__9140__auto____$1 = this;
var pr_pair__9143__auto__ = ((function (this__9140__auto____$1){
return (function (keyval__9144__auto__){
return cljs.core.pr_sequential_writer(writer__9141__auto__,cljs.core.pr_writer,""," ","",opts__9142__auto__,keyval__9144__auto__);
});})(this__9140__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9141__auto__,pr_pair__9143__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__9142__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15703){
var self__ = this;
var G__15703__$1 = this;
return (new cljs.core.RecordIter((0),G__15703__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9124__auto__){
var self__ = this;
var this__9124__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9121__auto__){
var self__ = this;
var this__9121__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9130__auto__){
var self__ = this;
var this__9130__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9122__auto__){
var self__ = this;
var this__9122__auto____$1 = this;
var h__8894__auto__ = self__.__hash;
if(!((h__8894__auto__ == null))){
return h__8894__auto__;
} else {
var h__8894__auto____$1 = (function (){var fexpr__15732 = ((function (h__8894__auto__,this__9122__auto____$1){
return (function (coll__9123__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__9123__auto__));
});})(h__8894__auto__,this__9122__auto____$1))
;
return fexpr__15732(this__9122__auto____$1);
})();
self__.__hash = h__8894__auto____$1;

return h__8894__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15705,other15706){
var self__ = this;
var this15705__$1 = this;
return (!((other15706 == null))) && ((this15705__$1.constructor === other15706.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15705__$1.read,other15706.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15705__$1.description,other15706.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15705__$1.content_type,other15706.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15705__$1.__extmap,other15706.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9135__auto__,k__9136__auto__){
var self__ = this;
var this__9135__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__9136__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9135__auto____$1),self__.__meta),k__9136__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9136__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9133__auto__,k__9134__auto__,G__15703){
var self__ = this;
var this__9133__auto____$1 = this;
var pred__15733 = cljs.core.keyword_identical_QMARK_;
var expr__15734 = k__9134__auto__;
if(cljs.core.truth_((function (){var G__15736 = cljs.core.cst$kw$read;
var G__15737 = expr__15734;
return (pred__15733.cljs$core$IFn$_invoke$arity$2 ? pred__15733.cljs$core$IFn$_invoke$arity$2(G__15736,G__15737) : pred__15733.call(null,G__15736,G__15737));
})())){
return (new ajax.interceptors.ResponseFormat(G__15703,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15738 = cljs.core.cst$kw$description;
var G__15739 = expr__15734;
return (pred__15733.cljs$core$IFn$_invoke$arity$2 ? pred__15733.cljs$core$IFn$_invoke$arity$2(G__15738,G__15739) : pred__15733.call(null,G__15738,G__15739));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__15703,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15740 = cljs.core.cst$kw$content_DASH_type;
var G__15741 = expr__15734;
return (pred__15733.cljs$core$IFn$_invoke$arity$2 ? pred__15733.cljs$core$IFn$_invoke$arity$2(G__15740,G__15741) : pred__15733.call(null,G__15740,G__15741));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__15703,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9134__auto__,G__15703),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9138__auto__){
var self__ = this;
var this__9138__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9125__auto__,G__15703){
var self__ = this;
var this__9125__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__15703,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9131__auto__,entry__9132__auto__){
var self__ = this;
var this__9131__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9132__auto__)){
return this__9131__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9131__auto____$1,entry__9132__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__9164__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__9164__auto__,writer__9165__auto__){
return cljs.core._write(writer__9165__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__15707){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__15707),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__15707),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__15707),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15707,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9126__auto__,k__9127__auto__){
var self__ = this;
var this__9126__auto____$1 = this;
return this__9126__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9127__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9128__auto__,k15745,else__9129__auto__){
var self__ = this;
var this__9128__auto____$1 = this;
var G__15749 = k15745;
switch (G__15749) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15745,else__9129__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__15750){
var self__ = this;
var map__15751 = p__15750;
var map__15751__$1 = ((((!((map__15751 == null)))?((((map__15751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15751):map__15751);
var request = map__15751__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__15753 = ajax.interceptors.get_request_format(format);
var map__15753__$1 = ((((!((map__15753 == null)))?((((map__15753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15753):map__15753);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15753__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15753__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__8438__auto__ = headers;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9140__auto__,writer__9141__auto__,opts__9142__auto__){
var self__ = this;
var this__9140__auto____$1 = this;
var pr_pair__9143__auto__ = ((function (this__9140__auto____$1){
return (function (keyval__9144__auto__){
return cljs.core.pr_sequential_writer(writer__9141__auto__,cljs.core.pr_writer,""," ","",opts__9142__auto__,keyval__9144__auto__);
});})(this__9140__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9141__auto__,pr_pair__9143__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__9142__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15744){
var self__ = this;
var G__15744__$1 = this;
return (new cljs.core.RecordIter((0),G__15744__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9124__auto__){
var self__ = this;
var this__9124__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9121__auto__){
var self__ = this;
var this__9121__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9130__auto__){
var self__ = this;
var this__9130__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9122__auto__){
var self__ = this;
var this__9122__auto____$1 = this;
var h__8894__auto__ = self__.__hash;
if(!((h__8894__auto__ == null))){
return h__8894__auto__;
} else {
var h__8894__auto____$1 = (function (){var fexpr__15755 = ((function (h__8894__auto__,this__9122__auto____$1){
return (function (coll__9123__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__9123__auto__));
});})(h__8894__auto__,this__9122__auto____$1))
;
return fexpr__15755(this__9122__auto____$1);
})();
self__.__hash = h__8894__auto____$1;

return h__8894__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15746,other15747){
var self__ = this;
var this15746__$1 = this;
return (!((other15747 == null))) && ((this15746__$1.constructor === other15747.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15746__$1.__extmap,other15747.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9135__auto__,k__9136__auto__){
var self__ = this;
var this__9135__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9136__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9135__auto____$1),self__.__meta),k__9136__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9136__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9133__auto__,k__9134__auto__,G__15744){
var self__ = this;
var this__9133__auto____$1 = this;
var pred__15756 = cljs.core.keyword_identical_QMARK_;
var expr__15757 = k__9134__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9134__auto__,G__15744),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9138__auto__){
var self__ = this;
var this__9138__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9125__auto__,G__15744){
var self__ = this;
var this__9125__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__15744,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9131__auto__,entry__9132__auto__){
var self__ = this;
var this__9131__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9132__auto__)){
return this__9131__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9131__auto____$1,entry__9132__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__9164__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__9164__auto__,writer__9165__auto__){
return cljs.core._write(writer__9165__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__15748){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__15748)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__15761 = arguments.length;
switch (G__15761) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__15762,uri){
var map__15763 = p__15762;
var map__15763__$1 = ((((!((map__15763 == null)))?((((map__15763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15763):map__15763);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15763__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15763__$1,cljs.core.cst$kw$params);

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__15765){
var map__15766 = p__15765;
var map__15766__$1 = ((((!((map__15766 == null)))?((((map__15766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15766):map__15766);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15766__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15766__$1,cljs.core.cst$kw$params);
return ((function (map__15766,map__15766__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__15766,map__15766__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9126__auto__,k__9127__auto__){
var self__ = this;
var this__9126__auto____$1 = this;
return this__9126__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9127__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9128__auto__,k15770,else__9129__auto__){
var self__ = this;
var this__9128__auto____$1 = this;
var G__15774 = k15770;
switch (G__15774) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15770,else__9129__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__15775){
var self__ = this;
var map__15776 = p__15775;
var map__15776__$1 = ((((!((map__15776 == null)))?((((map__15776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15776):map__15776);
var request = map__15776__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15776__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9140__auto__,writer__9141__auto__,opts__9142__auto__){
var self__ = this;
var this__9140__auto____$1 = this;
var pr_pair__9143__auto__ = ((function (this__9140__auto____$1){
return (function (keyval__9144__auto__){
return cljs.core.pr_sequential_writer(writer__9141__auto__,cljs.core.pr_writer,""," ","",opts__9142__auto__,keyval__9144__auto__);
});})(this__9140__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9141__auto__,pr_pair__9143__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__9142__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15769){
var self__ = this;
var G__15769__$1 = this;
return (new cljs.core.RecordIter((0),G__15769__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9124__auto__){
var self__ = this;
var this__9124__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9121__auto__){
var self__ = this;
var this__9121__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9130__auto__){
var self__ = this;
var this__9130__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9122__auto__){
var self__ = this;
var this__9122__auto____$1 = this;
var h__8894__auto__ = self__.__hash;
if(!((h__8894__auto__ == null))){
return h__8894__auto__;
} else {
var h__8894__auto____$1 = (function (){var fexpr__15778 = ((function (h__8894__auto__,this__9122__auto____$1){
return (function (coll__9123__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll(coll__9123__auto__));
});})(h__8894__auto__,this__9122__auto____$1))
;
return fexpr__15778(this__9122__auto____$1);
})();
self__.__hash = h__8894__auto____$1;

return h__8894__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15771,other15772){
var self__ = this;
var this15771__$1 = this;
return (!((other15772 == null))) && ((this15771__$1.constructor === other15772.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15771__$1.__extmap,other15772.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9135__auto__,k__9136__auto__){
var self__ = this;
var this__9135__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9136__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9135__auto____$1),self__.__meta),k__9136__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9136__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9133__auto__,k__9134__auto__,G__15769){
var self__ = this;
var this__9133__auto____$1 = this;
var pred__15779 = cljs.core.keyword_identical_QMARK_;
var expr__15780 = k__9134__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9134__auto__,G__15769),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9138__auto__){
var self__ = this;
var this__9138__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9125__auto__,G__15769){
var self__ = this;
var this__9125__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__15769,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9131__auto__,entry__9132__auto__){
var self__ = this;
var this__9131__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9132__auto__)){
return this__9131__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9131__auto____$1,entry__9132__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__9164__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__9164__auto__,writer__9165__auto__){
return cljs.core._write(writer__9165__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__15773){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__15773)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9126__auto__,k__9127__auto__){
var self__ = this;
var this__9126__auto____$1 = this;
return this__9126__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9127__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9128__auto__,k15784,else__9129__auto__){
var self__ = this;
var this__9128__auto____$1 = this;
var G__15788 = k15784;
switch (G__15788) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15784,else__9129__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__15789){
var self__ = this;
var map__15790 = p__15789;
var map__15790__$1 = ((((!((map__15790 == null)))?((((map__15790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15790):map__15790);
var request = map__15790__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15790__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9140__auto__,writer__9141__auto__,opts__9142__auto__){
var self__ = this;
var this__9140__auto____$1 = this;
var pr_pair__9143__auto__ = ((function (this__9140__auto____$1){
return (function (keyval__9144__auto__){
return cljs.core.pr_sequential_writer(writer__9141__auto__,cljs.core.pr_writer,""," ","",opts__9142__auto__,keyval__9144__auto__);
});})(this__9140__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9141__auto__,pr_pair__9143__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__9142__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15783){
var self__ = this;
var G__15783__$1 = this;
return (new cljs.core.RecordIter((0),G__15783__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9124__auto__){
var self__ = this;
var this__9124__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9121__auto__){
var self__ = this;
var this__9121__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9130__auto__){
var self__ = this;
var this__9130__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9122__auto__){
var self__ = this;
var this__9122__auto____$1 = this;
var h__8894__auto__ = self__.__hash;
if(!((h__8894__auto__ == null))){
return h__8894__auto__;
} else {
var h__8894__auto____$1 = (function (){var fexpr__15792 = ((function (h__8894__auto__,this__9122__auto____$1){
return (function (coll__9123__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__9123__auto__));
});})(h__8894__auto__,this__9122__auto____$1))
;
return fexpr__15792(this__9122__auto____$1);
})();
self__.__hash = h__8894__auto____$1;

return h__8894__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15785,other15786){
var self__ = this;
var this15785__$1 = this;
return (!((other15786 == null))) && ((this15785__$1.constructor === other15786.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15785__$1.__extmap,other15786.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9135__auto__,k__9136__auto__){
var self__ = this;
var this__9135__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9136__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9135__auto____$1),self__.__meta),k__9136__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9136__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9133__auto__,k__9134__auto__,G__15783){
var self__ = this;
var this__9133__auto____$1 = this;
var pred__15793 = cljs.core.keyword_identical_QMARK_;
var expr__15794 = k__9134__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9134__auto__,G__15783),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9138__auto__){
var self__ = this;
var this__9138__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9125__auto__,G__15783){
var self__ = this;
var this__9125__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__15783,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9131__auto__,entry__9132__auto__){
var self__ = this;
var this__9131__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9132__auto__)){
return this__9131__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9132__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9131__auto____$1,entry__9132__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__9164__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__9164__auto__,writer__9165__auto__){
return cljs.core._write(writer__9165__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__15787){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__15787)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__15797){
var map__15798 = p__15797;
var map__15798__$1 = ((((!((map__15798 == null)))?((((map__15798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15798):map__15798);
var opts = map__15798__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15798__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
