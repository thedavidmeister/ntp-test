// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8438__auto__ = (function (){var and__8426__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8426__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8426__auto__;
}
})();
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
var G__19627 = (i + (1));
var G__19628 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19627;
ret = G__19628;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19630 = arguments.length;
switch (G__19630) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19632 = (i + (1));
i = G__19632;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19634_SHARP_,p2__19633_SHARP_){
if((p2__19633_SHARP_ == null)){
return p1__19634_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19634_SHARP_,p2__19633_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var old = hoplon.core.child_vec(this$);
var G__19641 = old;
var vec__19643 = G__19641;
var seq__19644 = cljs.core.seq(vec__19643);
var first__19645 = cljs.core.first(seq__19644);
var seq__19644__$1 = cljs.core.next(seq__19644);
var o = first__19645;
var os = seq__19644__$1;
var G__19642 = new$__$1;
var vec__19646 = G__19642;
var seq__19647 = cljs.core.seq(vec__19646);
var first__19648 = cljs.core.first(seq__19647);
var seq__19647__$1 = cljs.core.next(seq__19647);
var x = first__19648;
var xs = seq__19647__$1;
var G__19641__$1 = G__19641;
var G__19642__$1 = G__19642;
while(true){
var vec__19649 = G__19641__$1;
var seq__19650 = cljs.core.seq(vec__19649);
var first__19651 = cljs.core.first(seq__19650);
var seq__19650__$1 = cljs.core.next(seq__19650);
var o__$1 = first__19651;
var os__$1 = seq__19650__$1;
var vec__19652 = G__19642__$1;
var seq__19653 = cljs.core.seq(vec__19652);
var first__19654 = cljs.core.first(seq__19653);
var seq__19653__$1 = cljs.core.next(seq__19653);
var x__$1 = first__19654;
var xs__$1 = seq__19653__$1;
if(cljs.core.truth_((function (){var or__8438__auto__ = o__$1;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return x__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,o__$1)){
} else {
if(cljs.core.truth_((function (){var and__8426__auto__ = x__$1;
if(cljs.core.truth_(and__8426__auto__)){
return o__$1;
} else {
return and__8426__auto__;
}
})())){
this$.replaceChild(x__$1,o__$1);
} else {
if(cljs.core.truth_(x__$1)){
this$.appendChild(x__$1);
} else {
if(cljs.core.truth_(o__$1)){
this$.removeChild(o__$1);
} else {
}
}
}
}

var G__19655 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x__$1]),os__$1);
var G__19656 = xs__$1;
G__19641__$1 = G__19655;
G__19642__$1 = G__19656;
continue;
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19658 = arguments.length;
switch (G__19658) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19659_19662 = init;
var G__19660_19663 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19659_19662,G__19660_19663) : f.call(null,G__19659_19662,G__19660_19663));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19664_SHARP_){
return cljs.core.zipmap(p1__19664_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19666 = arguments.length;
switch (G__19666) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19668 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19669 = (0);
return setTimeout(G__19668,G__19669);
} else {
var temp__5455__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return v.push(f);
} else {
var G__19670_19688 = this$;
var G__19671_19689 = "_hoplonWhenDom";
var G__19672_19690 = [f];
goog.object.set(G__19670_19688,G__19671_19689,G__19672_19690);

var G__19673 = ((function (temp__5455__auto__){
return (function (){
var fexpr__19681 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19682 = ((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
;
var G__19683 = (20);
return setTimeout(G__19682,G__19683);
} else {
var seq__19684_19691 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19685_19692 = null;
var count__19686_19693 = (0);
var i__19687_19694 = (0);
while(true){
if((i__19687_19694 < count__19686_19693)){
var f_19695__$1 = chunk__19685_19692.cljs$core$IIndexed$_nth$arity$2(null,i__19687_19694);
(f_19695__$1.cljs$core$IFn$_invoke$arity$0 ? f_19695__$1.cljs$core$IFn$_invoke$arity$0() : f_19695__$1.call(null));

var G__19696 = seq__19684_19691;
var G__19697 = chunk__19685_19692;
var G__19698 = count__19686_19693;
var G__19699 = (i__19687_19694 + (1));
seq__19684_19691 = G__19696;
chunk__19685_19692 = G__19697;
count__19686_19693 = G__19698;
i__19687_19694 = G__19699;
continue;
} else {
var temp__5457__auto___19700 = cljs.core.seq(seq__19684_19691);
if(temp__5457__auto___19700){
var seq__19684_19701__$1 = temp__5457__auto___19700;
if(cljs.core.chunked_seq_QMARK_(seq__19684_19701__$1)){
var c__9369__auto___19702 = cljs.core.chunk_first(seq__19684_19701__$1);
var G__19703 = cljs.core.chunk_rest(seq__19684_19701__$1);
var G__19704 = c__9369__auto___19702;
var G__19705 = cljs.core.count(c__9369__auto___19702);
var G__19706 = (0);
seq__19684_19691 = G__19703;
chunk__19685_19692 = G__19704;
count__19686_19693 = G__19705;
i__19687_19694 = G__19706;
continue;
} else {
var f_19707__$1 = cljs.core.first(seq__19684_19701__$1);
(f_19707__$1.cljs$core$IFn$_invoke$arity$0 ? f_19707__$1.cljs$core$IFn$_invoke$arity$0() : f_19707__$1.call(null));

var G__19708 = cljs.core.next(seq__19684_19701__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__19684_19691 = G__19708;
chunk__19685_19692 = G__19709;
count__19686_19693 = G__19710;
i__19687_19694 = G__19711;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5455__auto__))
;
return fexpr__19681();
});})(temp__5455__auto__))
;
var G__19674 = (0);
return setTimeout(G__19673,G__19674);
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19712 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19713 = (0);
return setTimeout(G__19712,G__19713);
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19719 = args;
var vec__19720 = G__19719;
var seq__19721 = cljs.core.seq(vec__19720);
var first__19722 = cljs.core.first(seq__19721);
var seq__19721__$1 = cljs.core.next(seq__19721);
var arg = first__19722;
var args__$1 = seq__19721__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19719__$1 = G__19719;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19723 = G__19719__$1;
var seq__19724 = cljs.core.seq(vec__19723);
var first__19725 = cljs.core.first(seq__19724);
var seq__19724__$1 = cljs.core.next(seq__19724);
var arg__$1 = first__19725;
var args__$2 = seq__19724__$1;
if(cljs.core.not((function (){var or__8438__auto__ = arg__$1;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19726 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__19727 = kids__$2;
var G__19728 = args__$2;
attr__$1 = G__19726;
kids__$1 = G__19727;
G__19719__$1 = G__19728;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19729 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19719__$1,attr__$2,kids__$2,vec__19723,seq__19724,first__19725,seq__19724__$1,arg__$1,args__$2,attr,kids,G__19719,vec__19720,seq__19721,first__19722,seq__19721__$1,arg,args__$1){
return (function (p1__19714_SHARP_,p2__19715_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19714_SHARP_,p2__19715_SHARP_,true);
});})(attr__$1,kids__$1,G__19719__$1,attr__$2,kids__$2,vec__19723,seq__19724,first__19725,seq__19724__$1,arg__$1,args__$2,attr,kids,G__19719,vec__19720,seq__19721,first__19722,seq__19721__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19730 = kids__$2;
var G__19731 = args__$2;
attr__$1 = G__19729;
kids__$1 = G__19730;
G__19719__$1 = G__19731;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__19732 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19733 = kids__$2;
var G__19734 = cljs.core.rest(args__$2);
attr__$1 = G__19732;
kids__$1 = G__19733;
G__19719__$1 = G__19734;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19735 = attr__$2;
var G__19736 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19737 = args__$2;
attr__$1 = G__19735;
kids__$1 = G__19736;
G__19719__$1 = G__19737;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19738 = attr__$2;
var G__19739 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19740 = args__$2;
attr__$1 = G__19738;
kids__$1 = G__19739;
G__19719__$1 = G__19740;
continue;
} else {
var G__19741 = attr__$2;
var G__19742 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19743 = args__$2;
attr__$1 = G__19741;
kids__$1 = G__19742;
G__19719__$1 = G__19743;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5455__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null)))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._node[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9172__auto__.call(null,this$));
} else {
var m__9172__auto____$1 = (hoplon.core._node["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9172__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__19745_19752 = hoplon.core._node;
var G__19746_19753 = "string";
var G__19747_19754 = ((function (G__19745_19752,G__19746_19753){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19745_19752,G__19746_19753))
;
goog.object.set(G__19745_19752,G__19746_19753,G__19747_19754);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__19748_19755 = hoplon.core._node;
var G__19749_19756 = "number";
var G__19750_19757 = ((function (G__19748_19755,G__19749_19756){
return (function (this$){
var G__19751 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19751) : hoplon.core.$text.call(null,G__19751));
});})(G__19748_19755,G__19749_19756))
;
goog.object.set(G__19748_19755,G__19749_19756,G__19750_19757);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9172__auto__.call(null,this$,elem,value));
} else {
var m__9172__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9172__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19761_19789 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19761_19789){
return (function (ret__18817__auto__,p__19762){
var vec__19763 = p__19762;
var ___18818__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19763,(0),null);
var f__18819__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19763,(1),null);
var sym__18820__auto__ = (f__18819__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18819__auto__.cljs$core$IFn$_invoke$arity$0() : f__18819__auto__.call(null));
var G__19766 = ret__18817__auto__;
if(cljs.core.truth_(sym__18820__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19766,sym__18820__auto__);
} else {
return G__19766;
}
});})(opts19761_19789))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19761_19789){
return (function (p1__18816__18821__auto__){
var G__19768 = cljs.core.first(p1__18816__18821__auto__);
var fexpr__19767 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19761_19789);
return (fexpr__19767.cljs$core$IFn$_invoke$arity$1 ? fexpr__19767.cljs$core$IFn$_invoke$arity$1(G__19768) : fexpr__19767.call(null,G__19768));
});})(opts19761_19789))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19761_19789){
return (function (){
var checked__18785__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/b09/-sfl292/index.html.out/hoplon/core.cljs",14,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts19761_19789);
if(cljs.core.truth_(checked__18785__auto__)){
hoplon.core._elem_BANG_ = checked__18785__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts19761_19789))
], null)))));

var opts19771_19790 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19771_19790){
return (function (ret__18817__auto__,p__19772){
var vec__19773 = p__19772;
var ___18818__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19773,(0),null);
var f__18819__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19773,(1),null);
var sym__18820__auto__ = (f__18819__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18819__auto__.cljs$core$IFn$_invoke$arity$0() : f__18819__auto__.call(null));
var G__19776 = ret__18817__auto__;
if(cljs.core.truth_(sym__18820__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19776,sym__18820__auto__);
} else {
return G__19776;
}
});})(opts19771_19790))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19771_19790){
return (function (p1__18816__18821__auto__){
var G__19778 = cljs.core.first(p1__18816__18821__auto__);
var fexpr__19777 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19771_19790);
return (fexpr__19777.cljs$core$IFn$_invoke$arity$1 ? fexpr__19777.cljs$core$IFn$_invoke$arity$1(G__19778) : fexpr__19777.call(null,G__19778));
});})(opts19771_19790))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19771_19790){
return (function (){
var checked__18785__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/b09/-sfl292/index.html.out/hoplon/core.cljs",12,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19771_19790);
if(cljs.core.truth_(checked__18785__auto__)){
hoplon.core._do_BANG_ = checked__18785__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19771_19790))
], null)))));

var opts19781 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19781){
return (function (ret__18817__auto__,p__19782){
var vec__19783 = p__19782;
var ___18818__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(0),null);
var f__18819__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(1),null);
var sym__18820__auto__ = (f__18819__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18819__auto__.cljs$core$IFn$_invoke$arity$0() : f__18819__auto__.call(null));
var G__19786 = ret__18817__auto__;
if(cljs.core.truth_(sym__18820__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19786,sym__18820__auto__);
} else {
return G__19786;
}
});})(opts19781))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19781){
return (function (p1__18816__18821__auto__){
var G__19788 = cljs.core.first(p1__18816__18821__auto__);
var fexpr__19787 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19781);
return (fexpr__19787.cljs$core$IFn$_invoke$arity$1 ? fexpr__19787.cljs$core$IFn$_invoke$arity$1(G__19788) : fexpr__19787.call(null,G__19788));
});})(opts19781))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19781){
return (function (){
var checked__18785__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/ntp-test/b09/-sfl292/index.html.out/hoplon/core.cljs",12,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19781);
if(cljs.core.truth_(checked__18785__auto__)){
hoplon.core._on_BANG_ = checked__18785__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19781))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9172__auto__.call(null,this$,kvs));
} else {
var m__9172__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9172__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9172__auto__.call(null,this$,kvs));
} else {
var m__9172__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9172__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing exist.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null)))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9172__auto__.call(null,this$));
} else {
var m__9172__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9172__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9172__auto__.call(null,this$,child));
} else {
var m__9172__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9172__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9172__auto__.call(null,this$,child));
} else {
var m__9172__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9172__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9172__auto__.call(null,this$,new$,existing));
} else {
var m__9172__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9172__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9171__auto__ = (((this$ == null))?null:this$);
var m__9172__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9171__auto__)]);
if(!((m__9172__auto__ == null))){
return (m__9172__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9172__auto__.call(null,this$,new$,existing));
} else {
var m__9172__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9172__auto____$1 == null))){
return (m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9172__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9172__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__8426__auto__ = (this$ instanceof Element);
if(and__8426__auto__){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__8426__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem)));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return ((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node)));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x19799 = elem;
x19799.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x19799.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x19799){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x19799))
;

x19799.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x19799.cljs$core$ILookup$_lookup$arity$2 = ((function (x19799){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__19800 = this$__$1.children;
var G__19801 = k;
return goog.object.get(G__19800,G__19801);
}
});})(x19799))
;

x19799.cljs$core$ILookup$_lookup$arity$3 = ((function (x19799){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__8438__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return not_found;
}
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x19799.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x19799){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19802 = cljs.core.seq(kvs);
var chunk__19804 = null;
var count__19805 = (0);
var i__19806 = (0);
while(true){
if((i__19806 < count__19805)){
var vec__19808 = chunk__19804.cljs$core$IIndexed$_nth$arity$2(null,i__19806);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19808,(1),null);
var k_19830__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19830__$1);
} else {
e.setAttribute(k_19830__$1,((v === true)?k_19830__$1:v));
}

var G__19831 = seq__19802;
var G__19832 = chunk__19804;
var G__19833 = count__19805;
var G__19834 = (i__19806 + (1));
seq__19802 = G__19831;
chunk__19804 = G__19832;
count__19805 = G__19833;
i__19806 = G__19834;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19802);
if(temp__5457__auto__){
var seq__19802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19802__$1)){
var c__9369__auto__ = cljs.core.chunk_first(seq__19802__$1);
var G__19835 = cljs.core.chunk_rest(seq__19802__$1);
var G__19836 = c__9369__auto__;
var G__19837 = cljs.core.count(c__9369__auto__);
var G__19838 = (0);
seq__19802 = G__19835;
chunk__19804 = G__19836;
count__19805 = G__19837;
i__19806 = G__19838;
continue;
} else {
var vec__19811 = cljs.core.first(seq__19802__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(1),null);
var k_19839__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19839__$1);
} else {
e.setAttribute(k_19839__$1,((v === true)?k_19839__$1:v));
}

var G__19840 = cljs.core.next(seq__19802__$1);
var G__19841 = null;
var G__19842 = (0);
var G__19843 = (0);
seq__19802 = G__19840;
chunk__19804 = G__19841;
count__19805 = G__19842;
i__19806 = G__19843;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x19799){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19814 = cljs.core.seq(kvs);
var chunk__19815 = null;
var count__19816 = (0);
var i__19817 = (0);
while(true){
if((i__19817 < count__19816)){
var vec__19818 = chunk__19815.cljs$core$IIndexed$_nth$arity$2(null,i__19817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19818,(1),null);
var G__19821_19844 = e.style;
var G__19822_19845 = cljs.core.name(k);
var G__19823_19846 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19821_19844,G__19822_19845,G__19823_19846);

var G__19847 = seq__19814;
var G__19848 = chunk__19815;
var G__19849 = count__19816;
var G__19850 = (i__19817 + (1));
seq__19814 = G__19847;
chunk__19815 = G__19848;
count__19816 = G__19849;
i__19817 = G__19850;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19814);
if(temp__5457__auto__){
var seq__19814__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19814__$1)){
var c__9369__auto__ = cljs.core.chunk_first(seq__19814__$1);
var G__19851 = cljs.core.chunk_rest(seq__19814__$1);
var G__19852 = c__9369__auto__;
var G__19853 = cljs.core.count(c__9369__auto__);
var G__19854 = (0);
seq__19814 = G__19851;
chunk__19815 = G__19852;
count__19816 = G__19853;
i__19817 = G__19854;
continue;
} else {
var vec__19824 = cljs.core.first(seq__19814__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19824,(1),null);
var G__19827_19855 = e.style;
var G__19828_19856 = cljs.core.name(k);
var G__19829_19857 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19827_19855,G__19828_19856,G__19829_19857);

var G__19858 = cljs.core.next(seq__19814__$1);
var G__19859 = null;
var G__19860 = (0);
var G__19861 = (0);
seq__19814 = G__19858;
chunk__19815 = G__19859;
count__19816 = G__19860;
i__19817 = G__19861;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x19799){
return (function (this$){
var this$__$1 = this;
var temp__5455__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5455__auto__)){
var hl_kids = temp__5455__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x19799){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_19862 = hoplon.core._hoplon_kids(this$__$1);
var i_19863 = cljs.core.count(cljs.core.deref(kids_19862));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19862,i_19863,child__$1,this$__$1,x19799){
return (function (p1__19794_SHARP_,p2__19793_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19862,cljs.core.assoc,i_19863,p2__19793_SHARP_);
});})(kids_19862,i_19863,child__$1,this$__$1,x19799))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19862,cljs.core.assoc,i_19863,child__$1);
}

return child__$1;
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x19799){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_19864 = hoplon.core._hoplon_kids(this$__$1);
var before_count_19865 = cljs.core.count(cljs.core.deref(kids_19864));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_19864,((function (kids_19864,before_count_19865,child__$1,this$__$1,x19799){
return (function (p1__19795_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__19795_SHARP_));
});})(kids_19864,before_count_19865,child__$1,this$__$1,x19799))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_19864,((function (kids_19864,before_count_19865,child__$1,this$__$1,x19799){
return (function (p1__19796_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__19796_SHARP_));
});})(kids_19864,before_count_19865,child__$1,this$__$1,x19799))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_19864)),(before_count_19865 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x19799){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x19799){
return (function (p1__19797_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x19799){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x19799))
,p1__19797_SHARP_);
});})(existing__$1,this$__$1,x19799))
);

return existing__$1;
});})(x19799))
;

x19799.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x19799){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x19799){
return (function (p1__19798_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x19799){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x19799))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19798_SHARP_], 0)));
});})(new$__$1,this$__$1,x19799))
);
} else {
}
}

return new$__$1;
});})(x19799))
;

return x19799;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19871 = arguments.length;
switch (G__19871) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9740__auto__ = [];
var len__9717__auto___19873 = arguments.length;
var i__9718__auto___19874 = (0);
while(true){
if((i__9718__auto___19874 < len__9717__auto___19873)){
args_arr__9740__auto__.push((arguments[i__9718__auto___19874]));

var G__19875 = (i__9718__auto___19874 + (1));
i__9718__auto___19874 = G__19875;
continue;
} else {
}
break;
}

var argseq__9741__auto__ = (new cljs.core.IndexedSeq(args_arr__9740__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9741__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19867){
var G__19868 = cljs.core.first(seq19867);
var seq19867__$1 = cljs.core.next(seq19867);
var G__19869 = cljs.core.first(seq19867__$1);
var seq19867__$2 = cljs.core.next(seq19867__$1);
var G__19870 = cljs.core.first(seq19867__$2);
var seq19867__$3 = cljs.core.next(seq19867__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19868,G__19869,G__19870,seq19867__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19881 = arguments.length;
switch (G__19881) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9740__auto__ = [];
var len__9717__auto___19883 = arguments.length;
var i__9718__auto___19884 = (0);
while(true){
if((i__9718__auto___19884 < len__9717__auto___19883)){
args_arr__9740__auto__.push((arguments[i__9718__auto___19884]));

var G__19885 = (i__9718__auto___19884 + (1));
i__9718__auto___19884 = G__19885;
continue;
} else {
}
break;
}

var argseq__9741__auto__ = (new cljs.core.IndexedSeq(args_arr__9740__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9741__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19877){
var G__19878 = cljs.core.first(seq19877);
var seq19877__$1 = cljs.core.next(seq19877);
var G__19879 = cljs.core.first(seq19877__$1);
var seq19877__$2 = cljs.core.next(seq19877__$1);
var G__19880 = cljs.core.first(seq19877__$2);
var seq19877__$3 = cljs.core.next(seq19877__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19878,G__19879,G__19880,seq19877__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19887_SHARP_,p2__19886_SHARP_,p3__19888_SHARP_){
hoplon.core._attribute_BANG_(p2__19886_SHARP_,p1__19887_SHARP_,p3__19888_SHARP_);

return p1__19887_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19889){
var vec__19890 = p__19889;
var seq__19891 = cljs.core.seq(vec__19890);
var first__19892 = cljs.core.first(seq__19891);
var seq__19891__$1 = cljs.core.next(seq__19891);
var child_cell = first__19892;
var _ = seq__19891__$1;
var kids = vec__19890;
var this$__$1 = this$;
var seq__19893_19897 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19894_19898 = null;
var count__19895_19899 = (0);
var i__19896_19900 = (0);
while(true){
if((i__19896_19900 < count__19895_19899)){
var x_19901 = chunk__19894_19898.cljs$core$IIndexed$_nth$arity$2(null,i__19896_19900);
var temp__5457__auto___19902 = hoplon.core.__GT_node(x_19901);
if(cljs.core.truth_(temp__5457__auto___19902)){
var x_19903__$1 = temp__5457__auto___19902;
hoplon.core._append_child_BANG_(this$__$1,x_19903__$1);
} else {
}

var G__19904 = seq__19893_19897;
var G__19905 = chunk__19894_19898;
var G__19906 = count__19895_19899;
var G__19907 = (i__19896_19900 + (1));
seq__19893_19897 = G__19904;
chunk__19894_19898 = G__19905;
count__19895_19899 = G__19906;
i__19896_19900 = G__19907;
continue;
} else {
var temp__5457__auto___19908 = cljs.core.seq(seq__19893_19897);
if(temp__5457__auto___19908){
var seq__19893_19909__$1 = temp__5457__auto___19908;
if(cljs.core.chunked_seq_QMARK_(seq__19893_19909__$1)){
var c__9369__auto___19910 = cljs.core.chunk_first(seq__19893_19909__$1);
var G__19911 = cljs.core.chunk_rest(seq__19893_19909__$1);
var G__19912 = c__9369__auto___19910;
var G__19913 = cljs.core.count(c__9369__auto___19910);
var G__19914 = (0);
seq__19893_19897 = G__19911;
chunk__19894_19898 = G__19912;
count__19895_19899 = G__19913;
i__19896_19900 = G__19914;
continue;
} else {
var x_19915 = cljs.core.first(seq__19893_19909__$1);
var temp__5457__auto___19916__$1 = hoplon.core.__GT_node(x_19915);
if(cljs.core.truth_(temp__5457__auto___19916__$1)){
var x_19917__$1 = temp__5457__auto___19916__$1;
hoplon.core._append_child_BANG_(this$__$1,x_19917__$1);
} else {
}

var G__19918 = cljs.core.next(seq__19893_19909__$1);
var G__19919 = null;
var G__19920 = (0);
var G__19921 = (0);
seq__19893_19897 = G__19918;
chunk__19894_19898 = G__19919;
count__19895_19899 = G__19920;
i__19896_19900 = G__19921;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9724__auto__ = [];
var len__9717__auto___19928 = arguments.length;
var i__9718__auto___19929 = (0);
while(true){
if((i__9718__auto___19929 < len__9717__auto___19928)){
args__9724__auto__.push((arguments[i__9718__auto___19929]));

var G__19930 = (i__9718__auto___19929 + (1));
i__9718__auto___19929 = G__19930;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((1) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9725__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19924 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19924,(1),null);
var G__19927 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__19927,attr);

hoplon.core.add_children_BANG_(G__19927,kids);

return G__19927;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19922){
var G__19923 = cljs.core.first(seq19922);
var seq19922__$1 = cljs.core.next(seq19922);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19923,seq19922__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19932 = null;
var G__19932__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19932__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19932__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19932__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19932__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19932__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19932__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19932__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19932__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19932__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19932__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19932__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19932__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19932__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19932__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19932__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19932__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19932__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19932__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19932__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19932__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19932__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19932 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19932__1.call(this,self__);
case 2:
return G__19932__2.call(this,self__,a);
case 3:
return G__19932__3.call(this,self__,a,b);
case 4:
return G__19932__4.call(this,self__,a,b,c);
case 5:
return G__19932__5.call(this,self__,a,b,c,d);
case 6:
return G__19932__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19932__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19932__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19932__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19932__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19932__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19932__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19932__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19932__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19932__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19932__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19932__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19932__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19932__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19932__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19932__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19932__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19932.cljs$core$IFn$_invoke$arity$1 = G__19932__1;
G__19932.cljs$core$IFn$_invoke$arity$2 = G__19932__2;
G__19932.cljs$core$IFn$_invoke$arity$3 = G__19932__3;
G__19932.cljs$core$IFn$_invoke$arity$4 = G__19932__4;
G__19932.cljs$core$IFn$_invoke$arity$5 = G__19932__5;
G__19932.cljs$core$IFn$_invoke$arity$6 = G__19932__6;
G__19932.cljs$core$IFn$_invoke$arity$7 = G__19932__7;
G__19932.cljs$core$IFn$_invoke$arity$8 = G__19932__8;
G__19932.cljs$core$IFn$_invoke$arity$9 = G__19932__9;
G__19932.cljs$core$IFn$_invoke$arity$10 = G__19932__10;
G__19932.cljs$core$IFn$_invoke$arity$11 = G__19932__11;
G__19932.cljs$core$IFn$_invoke$arity$12 = G__19932__12;
G__19932.cljs$core$IFn$_invoke$arity$13 = G__19932__13;
G__19932.cljs$core$IFn$_invoke$arity$14 = G__19932__14;
G__19932.cljs$core$IFn$_invoke$arity$15 = G__19932__15;
G__19932.cljs$core$IFn$_invoke$arity$16 = G__19932__16;
G__19932.cljs$core$IFn$_invoke$arity$17 = G__19932__17;
G__19932.cljs$core$IFn$_invoke$arity$18 = G__19932__18;
G__19932.cljs$core$IFn$_invoke$arity$19 = G__19932__19;
G__19932.cljs$core$IFn$_invoke$arity$20 = G__19932__20;
G__19932.cljs$core$IFn$_invoke$arity$21 = G__19932__21;
G__19932.cljs$core$IFn$_invoke$arity$22 = G__19932__22;
return G__19932;
})()
;

Element.prototype.apply = (function (self__,args19931){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19931)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
DocumentFragment.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<DocumentFragment>"], 0));
});

DocumentFragment.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.call = (function() {
var G__19934 = null;
var G__19934__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19934__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19934__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19934__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19934__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19934__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19934__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19934__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19934__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19934__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19934__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19934__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19934__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19934__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19934__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19934__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19934__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19934__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19934__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19934__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19934__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19934__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19934 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19934__1.call(this,self__);
case 2:
return G__19934__2.call(this,self__,a);
case 3:
return G__19934__3.call(this,self__,a,b);
case 4:
return G__19934__4.call(this,self__,a,b,c);
case 5:
return G__19934__5.call(this,self__,a,b,c,d);
case 6:
return G__19934__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19934__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19934__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19934__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19934__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19934__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19934__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19934__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19934__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19934__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19934__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19934__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19934__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19934__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19934__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19934__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19934__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19934.cljs$core$IFn$_invoke$arity$1 = G__19934__1;
G__19934.cljs$core$IFn$_invoke$arity$2 = G__19934__2;
G__19934.cljs$core$IFn$_invoke$arity$3 = G__19934__3;
G__19934.cljs$core$IFn$_invoke$arity$4 = G__19934__4;
G__19934.cljs$core$IFn$_invoke$arity$5 = G__19934__5;
G__19934.cljs$core$IFn$_invoke$arity$6 = G__19934__6;
G__19934.cljs$core$IFn$_invoke$arity$7 = G__19934__7;
G__19934.cljs$core$IFn$_invoke$arity$8 = G__19934__8;
G__19934.cljs$core$IFn$_invoke$arity$9 = G__19934__9;
G__19934.cljs$core$IFn$_invoke$arity$10 = G__19934__10;
G__19934.cljs$core$IFn$_invoke$arity$11 = G__19934__11;
G__19934.cljs$core$IFn$_invoke$arity$12 = G__19934__12;
G__19934.cljs$core$IFn$_invoke$arity$13 = G__19934__13;
G__19934.cljs$core$IFn$_invoke$arity$14 = G__19934__14;
G__19934.cljs$core$IFn$_invoke$arity$15 = G__19934__15;
G__19934.cljs$core$IFn$_invoke$arity$16 = G__19934__16;
G__19934.cljs$core$IFn$_invoke$arity$17 = G__19934__17;
G__19934.cljs$core$IFn$_invoke$arity$18 = G__19934__18;
G__19934.cljs$core$IFn$_invoke$arity$19 = G__19934__19;
G__19934.cljs$core$IFn$_invoke$arity$20 = G__19934__20;
G__19934.cljs$core$IFn$_invoke$arity$21 = G__19934__21;
G__19934.cljs$core$IFn$_invoke$arity$22 = G__19934__22;
return G__19934;
})()
;

DocumentFragment.prototype.apply = (function (self__,args19933){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19933)));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__19941__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__19935_19942 = document;
var G__19936_19943 = elem;
var G__19937_19944 = document.createElement(elem);
goog.object.set(G__19935_19942,G__19936_19943,G__19937_19944);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__19938_19945 = hoplon.core.parse_args(args);
var attrs_19946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938_19945,(0),null);
var kids_19947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938_19945,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_19946))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_19946);

hoplon.core.add_children_BANG_(helem,kids_19947);
}

return helem;
};
var G__19941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19948__i = 0, G__19948__a = new Array(arguments.length -  0);
while (G__19948__i < G__19948__a.length) {G__19948__a[G__19948__i] = arguments[G__19948__i + 0]; ++G__19948__i;}
  args = new cljs.core.IndexedSeq(G__19948__a,0,null);
} 
return G__19941__delegate.call(this,args);};
G__19941.cljs$lang$maxFixedArity = 0;
G__19941.cljs$lang$applyTo = (function (arglist__19949){
var args = cljs.core.seq(arglist__19949);
return G__19941__delegate(args);
});
G__19941.cljs$core$IFn$_invoke$arity$variadic = G__19941__delegate;
return G__19941;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__19953__delegate = function (args){
var vec__19950 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19950,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19950,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__19953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19954__i = 0, G__19954__a = new Array(arguments.length -  0);
while (G__19954__i < G__19954__a.length) {G__19954__a[G__19954__i] = arguments[G__19954__i + 0]; ++G__19954__i;}
  args = new cljs.core.IndexedSeq(G__19954__a,0,null);
} 
return G__19953__delegate.call(this,args);};
G__19953.cljs$lang$maxFixedArity = 0;
G__19953.cljs$lang$applyTo = (function (arglist__19955){
var args = cljs.core.seq(arglist__19955);
return G__19953__delegate(args);
});
G__19953.cljs$core$IFn$_invoke$arity$variadic = G__19953__delegate;
return G__19953;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9724__auto__ = [];
var len__9717__auto___19957 = arguments.length;
var i__9718__auto___19958 = (0);
while(true){
if((i__9718__auto___19958 < len__9717__auto___19957)){
args__9724__auto__.push((arguments[i__9718__auto___19958]));

var G__19959 = (i__9718__auto___19958 + (1));
i__9718__auto___19958 = G__19959;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((0) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9725__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19956){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19956));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19960_SHARP_){
return document.createTextNode(p1__19960_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19961_SHARP_){
return document.createComment(p1__19961_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__9493__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9494__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9495__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9496__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9497__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9497__auto__,method_table__9493__auto__,prefer_table__9494__auto__,method_cache__9495__auto__,cached_hierarchy__9496__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__19963_SHARP_,p2__19962_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__19962_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9493__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9494__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9495__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9496__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9497__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9497__auto__,method_table__9493__auto__,prefer_table__9494__auto__,method_cache__9495__auto__,cached_hierarchy__9496__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19964 = elem;
var G__19965 = cljs.core.cst$kw$attr;
var G__19966 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19964,G__19965,G__19966) : hoplon.core.do_BANG_.call(null,G__19964,G__19965,G__19966));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9493__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9494__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9495__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9496__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9497__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9497__auto__,method_table__9493__auto__,prefer_table__9494__auto__,method_cache__9495__auto__,cached_hierarchy__9496__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19971 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19969,G__19970){
return (G__19969.cljs$core$IFn$_invoke$arity$1 ? G__19969.cljs$core$IFn$_invoke$arity$1(G__19970) : G__19969.call(null,G__19970));
});})(on_deck))
);
return (fexpr__19971.cljs$core$IFn$_invoke$arity$2 ? fexpr__19971.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19971.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19967_SHARP_){
var fexpr__19975 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19973,G__19972,G__19974){
return (G__19972.cljs$core$IFn$_invoke$arity$3 ? G__19972.cljs$core$IFn$_invoke$arity$3(G__19973,G__19974,null) : G__19972.call(null,G__19973,G__19974,null));
});})(on_deck,items_seq))
);
return (fexpr__19975.cljs$core$IFn$_invoke$arity$3 ? fexpr__19975.cljs$core$IFn$_invoke$arity$3(items_seq,cljs.core.nth,p1__19967_SHARP_) : fexpr__19975.call(null,items_seq,cljs.core.nth,p1__19967_SHARP_));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19968_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19968_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19968_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19976 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19977 = null;
var count__19978 = (0);
var i__19979 = (0);
while(true){
if((i__19979 < count__19978)){
var i = chunk__19977.cljs$core$IIndexed$_nth$arity$2(null,i__19979);
var e_19982 = (function (){var or__8438__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
var G__19980 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19980) : tpl.call(null,G__19980));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19982);

var G__19983 = seq__19976;
var G__19984 = chunk__19977;
var G__19985 = count__19978;
var G__19986 = (i__19979 + (1));
seq__19976 = G__19983;
chunk__19977 = G__19984;
count__19978 = G__19985;
i__19979 = G__19986;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19976);
if(temp__5457__auto__){
var seq__19976__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19976__$1)){
var c__9369__auto__ = cljs.core.chunk_first(seq__19976__$1);
var G__19987 = cljs.core.chunk_rest(seq__19976__$1);
var G__19988 = c__9369__auto__;
var G__19989 = cljs.core.count(c__9369__auto__);
var G__19990 = (0);
seq__19976 = G__19987;
chunk__19977 = G__19988;
count__19978 = G__19989;
i__19979 = G__19990;
continue;
} else {
var i = cljs.core.first(seq__19976__$1);
var e_19991 = (function (){var or__8438__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
var G__19981 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19981) : tpl.call(null,G__19981));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19991);

var G__19992 = cljs.core.next(seq__19976__$1);
var G__19993 = null;
var G__19994 = (0);
var G__19995 = (0);
seq__19976 = G__19992;
chunk__19977 = G__19993;
count__19978 = G__19994;
i__19979 = G__19995;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9483__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9483__auto__)){
var e_19996 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19996);

var G__19997 = (_ + (1));
_ = G__19997;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
var els_state_20035 = cljs.core.memoize((function (scope){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));
var items_state_20036 = cljs.core.memoize(((function (els_state_20035){
return (function (scope){
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});})(els_state_20035))
);
/**
 * Like `loop-tpl*` but accepts a `key-fn` which, given a list item returns an
 *   (immutable) key under which to cache and reuse the rendered DOM element.
 *   Also accepts a `scope` allowing keyed items to be tracked across multiple lists
 *   for use in e.g. drag and drop applications.
 *   Only one item per key is supported per scope, it is the application's
 *   responsibility to ensure that item values are consistent and correct across
 *   multiple lists.
 */
hoplon.core.keyed_loop_tpl_STAR_ = ((function (els_state_20035,items_state_20036){
return (function hoplon$core$keyed_loop_tpl_STAR_(var_args){
var args__9724__auto__ = [];
var len__9717__auto___20037 = arguments.length;
var i__9718__auto___20038 = (0);
while(true){
if((i__9718__auto___20038 < len__9717__auto___20037)){
args__9724__auto__.push((arguments[i__9718__auto___20038]));

var G__20039 = (i__9718__auto___20038 + (1));
i__9718__auto___20038 = G__20039;
continue;
} else {
}
break;
}

var argseq__9725__auto__ = ((((2) < args__9724__auto__.length))?(new cljs.core.IndexedSeq(args__9724__auto__.slice((2)),(0),null)):null);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9725__auto__);
});})(els_state_20035,items_state_20036))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (els_state_20035,items_state_20036){
return (function (items,tpl,p__20002){
var map__20003 = p__20002;
var map__20003__$1 = ((((!((map__20003 == null)))?((((map__20003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20003):map__20003);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20003__$1,cljs.core.cst$kw$scope);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20003__$1,cljs.core.cst$kw$key_DASH_fn);
var key_fn__$1 = (function (){var or__8438__auto__ = key_fn;
if(cljs.core.truth_(or__8438__auto__)){
return or__8438__auto__;
} else {
return cljs.core.identity;
}
})();
var ks = (function (){var fexpr__20008 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (G__20007,G__20005,G__20006){
return (G__20005.cljs$core$IFn$_invoke$arity$2 ? G__20005.cljs$core$IFn$_invoke$arity$2(G__20006,G__20007) : G__20005.call(null,G__20006,G__20007));
});})(key_fn__$1,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
return (fexpr__20008.cljs$core$IFn$_invoke$arity$3 ? fexpr__20008.cljs$core$IFn$_invoke$arity$3(items,cljs.core.map,key_fn__$1) : fexpr__20008.call(null,items,cljs.core.map,key_fn__$1));
})();
var els = (cljs.core.truth_(scope)?(els_state_20035.cljs$core$IFn$_invoke$arity$1 ? els_state_20035.cljs$core$IFn$_invoke$arity$1(scope) : els_state_20035.call(null,scope)):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var scoped_items = (cljs.core.truth_(scope)?(items_state_20036.cljs$core$IFn$_invoke$arity$1 ? items_state_20036.cljs$core$IFn$_invoke$arity$1(scope) : items_state_20036.call(null,scope)):(function (){var fexpr__20012 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (G__20011,G__20009,G__20010){
return (G__20009.cljs$core$IFn$_invoke$arity$2 ? G__20009.cljs$core$IFn$_invoke$arity$2(G__20010,G__20011) : G__20009.call(null,G__20010,G__20011));
});})(key_fn__$1,ks,els,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
return (fexpr__20012.cljs$core$IFn$_invoke$arity$3 ? fexpr__20012.cljs$core$IFn$_invoke$arity$3(items,cljs.core.zipmap,ks) : fexpr__20012.call(null,items,cljs.core.zipmap,ks));
})());
var k__GT_el = ((function (key_fn__$1,ks,els,scoped_items,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (p1__19998_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(els),p1__19998_SHARP_);
});})(key_fn__$1,ks,els,scoped_items,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
;
if(cljs.core.truth_(scope)){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (_,n){
return javelin.core.dosync_STAR_(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (){
var seq__20013 = cljs.core.seq(n);
var chunk__20014 = null;
var count__20015 = (0);
var i__20016 = (0);
while(true){
if((i__20016 < count__20015)){
var i = chunk__20014.cljs$core$IIndexed$_nth$arity$2(null,i__20016);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__20040 = seq__20013;
var G__20041 = chunk__20014;
var G__20042 = count__20015;
var G__20043 = (i__20016 + (1));
seq__20013 = G__20040;
chunk__20014 = G__20041;
count__20015 = G__20042;
i__20016 = G__20043;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20013);
if(temp__5457__auto__){
var seq__20013__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20013__$1)){
var c__9369__auto__ = cljs.core.chunk_first(seq__20013__$1);
var G__20044 = cljs.core.chunk_rest(seq__20013__$1);
var G__20045 = c__9369__auto__;
var G__20046 = cljs.core.count(c__9369__auto__);
var G__20047 = (0);
seq__20013 = G__20044;
chunk__20014 = G__20045;
count__20015 = G__20046;
i__20016 = G__20047;
continue;
} else {
var i = cljs.core.first(seq__20013__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__20048 = cljs.core.next(seq__20013__$1);
var G__20049 = null;
var G__20050 = (0);
var G__20051 = (0);
seq__20013 = G__20048;
chunk__20014 = G__20049;
count__20015 = G__20050;
i__20016 = G__20051;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
} else {
}

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(ks,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (_,n){
var seq__20017 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.deref(els)),n));
var chunk__20018 = null;
var count__20019 = (0);
var i__20020 = (0);
while(true){
if((i__20020 < count__20019)){
var k = chunk__20018.cljs$core$IIndexed$_nth$arity$2(null,i__20020);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__20021 = (function (){var fexpr__20025 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__20017,chunk__20018,count__20019,i__20020,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (G__20023,G__20022,G__20024){
return (G__20022.cljs$core$IFn$_invoke$arity$2 ? G__20022.cljs$core$IFn$_invoke$arity$2(G__20023,G__20024) : G__20022.call(null,G__20023,G__20024));
});})(seq__20017,chunk__20018,count__20019,i__20020,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
return (fexpr__20025.cljs$core$IFn$_invoke$arity$3 ? fexpr__20025.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__20025.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__20021) : tpl.call(null,G__20021));
})());

var G__20052 = seq__20017;
var G__20053 = chunk__20018;
var G__20054 = count__20019;
var G__20055 = (i__20020 + (1));
seq__20017 = G__20052;
chunk__20018 = G__20053;
count__20019 = G__20054;
i__20020 = G__20055;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20017);
if(temp__5457__auto__){
var seq__20017__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20017__$1)){
var c__9369__auto__ = cljs.core.chunk_first(seq__20017__$1);
var G__20056 = cljs.core.chunk_rest(seq__20017__$1);
var G__20057 = c__9369__auto__;
var G__20058 = cljs.core.count(c__9369__auto__);
var G__20059 = (0);
seq__20017 = G__20056;
chunk__20018 = G__20057;
count__20019 = G__20058;
i__20020 = G__20059;
continue;
} else {
var k = cljs.core.first(seq__20017__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__20026 = (function (){var fexpr__20030 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__20017,chunk__20018,count__20019,i__20020,k,seq__20017__$1,temp__5457__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (G__20028,G__20027,G__20029){
return (G__20027.cljs$core$IFn$_invoke$arity$2 ? G__20027.cljs$core$IFn$_invoke$arity$2(G__20028,G__20029) : G__20027.call(null,G__20028,G__20029));
});})(seq__20017,chunk__20018,count__20019,i__20020,k,seq__20017__$1,temp__5457__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
return (fexpr__20030.cljs$core$IFn$_invoke$arity$3 ? fexpr__20030.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__20030.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__20026) : tpl.call(null,G__20026));
})());

var G__20060 = cljs.core.next(seq__20017__$1);
var G__20061 = null;
var G__20062 = (0);
var G__20063 = (0);
seq__20017 = G__20060;
chunk__20018 = G__20061;
count__20019 = G__20062;
i__20020 = G__20063;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);

var fexpr__20034 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036){
return (function (G__20031,G__20033,G__20032){
return (G__20031.cljs$core$IFn$_invoke$arity$2 ? G__20031.cljs$core$IFn$_invoke$arity$2(G__20032,G__20033) : G__20031.call(null,G__20032,G__20033));
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__20003,map__20003__$1,scope,key_fn,els_state_20035,items_state_20036))
);
return (fexpr__20034.cljs$core$IFn$_invoke$arity$3 ? fexpr__20034.cljs$core$IFn$_invoke$arity$3(cljs.core.map,ks,k__GT_el) : fexpr__20034.call(null,cljs.core.map,ks,k__GT_el));
});})(els_state_20035,items_state_20036))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$maxFixedArity = (2);

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$applyTo = ((function (els_state_20035,items_state_20036){
return (function (seq19999){
var G__20000 = cljs.core.first(seq19999);
var seq19999__$1 = cljs.core.next(seq19999);
var G__20001 = cljs.core.first(seq19999__$1);
var seq19999__$2 = cljs.core.next(seq19999__$1);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20000,G__20001,seq19999__$2);
});})(els_state_20035,items_state_20036))
;

