(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{3323:function(t,e,c){"use strict";c("4763")},4763:function(t,e,c){},"567c":function(t,e,c){},"5f6f":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),a=function(t){return Object(n["w"])("data-v-eba44b50"),t=t(),Object(n["u"])(),t},i={class:"wrapper"},o={class:"search"},r=a((function(){return Object(n["g"])("div",{class:"search__content"},[Object(n["g"])("div",{class:"search__content__icon iconfont"},""),Object(n["g"])("input",{type:"text",placeholder:"请输入商品名称搜索",class:"search__content__input"})],-1)}));function s(t,e,c,a,s,l){var u=Object(n["A"])("ShowInfor"),d=Object(n["A"])("Content"),b=Object(n["A"])("Cart");return Object(n["t"])(),Object(n["f"])("div",i,[Object(n["g"])("div",o,[Object(n["g"])("div",{class:"search__back iconfont",onClick:e[0]||(e[0]=function(){return a.handleBack&&a.handleBack.apply(a,arguments)})},""),r]),Object(n["K"])(Object(n["j"])(u,{item:a.item,hideBorder:!0},null,8,["item"]),[[n["G"],a.item._id]]),Object(n["j"])(d,{shopName:a.item.name},null,8,["shopName"]),Object(n["j"])(b)])}var l=c("6c02"),u=c("b775"),d=c("e2c7"),b=function(t){return Object(n["w"])("data-v-2467252c"),t=t(),Object(n["u"])(),t},O={class:"content"},j={class:"category"},_=["onClick"],p={class:"product"},g=["src"],f={class:"product__item__content"},h={class:"title"},v={class:"sales"},m={class:"price"},C=b((function(){return Object(n["g"])("span",{class:"price__yen"},"¥",-1)})),k={class:"price__origin"},I={class:"number"},w=["onClick"],y=["onClick"];function S(t,e,c,a,i,o){return Object(n["t"])(),Object(n["f"])("div",O,[Object(n["g"])("div",j,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.catagoryList,(function(t,e){return Object(n["t"])(),Object(n["f"])("div",{class:Object(n["p"])({category__item:!0,"category__item--active":t.tab===a.currentTab}),key:e,onClick:function(){return a.changeTab(t.tab)}},Object(n["C"])(t.name),11,_)})),128))]),Object(n["g"])("div",p,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.contentList,(function(t){var e,i,o;return Object(n["t"])(),Object(n["f"])("div",{class:"product__item",key:t._id},[Object(n["g"])("img",{class:"product__item__img",src:t.imgUrl},null,8,g),Object(n["g"])("div",f,[Object(n["g"])("h4",h,Object(n["C"])(t.name),1),Object(n["g"])("p",v,"月售"+Object(n["C"])(t.sales),1),Object(n["g"])("p",m,[C,Object(n["i"])(Object(n["C"])(t.price)+" ",1),Object(n["g"])("span",k,"¥"+Object(n["C"])(t.oldPrice),1)]),Object(n["g"])("div",I,[Object(n["g"])("span",{class:"number__minus",onClick:function(){return a.changeItemToCart(a.shopId,t._id,t,-1,c.shopName)}},"-",8,w),Object(n["i"])(" "+Object(n["C"])(null!==(e=null===(i=a.productList)||void 0===i||null===(o=i[t._id])||void 0===o?void 0:o.count)&&void 0!==e?e:0)+" ",1),Object(n["g"])("span",{class:"number__add",onClick:function(){return a.changeItemToCart(a.shopId,t._id,t,1,c.shopName)}},"+",8,y)])])])})),128))])])}var L=c("5502"),T=Object(n["x"])([{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}]),A=function(){var t=Object(n["y"])("all"),e=function(e){t.value=e};return{currentTab:t,changeTab:e}},P=function(t,e){var c=Object(n["x"])({contentList:[]}),a=function(){Object(u["a"])("/api/shop/".concat(e.params.id,"/products"),{tab:t.value}).then((function(t){var e,n;0===(null===(e=t.data)||void 0===e?void 0:e.errno)&&(c.contentList=null===(n=t.data)||void 0===n?void 0:n.data)})).catch((function(t){console.log(t)}))};Object(n["I"])((function(){a()}));var i=Object(n["D"])(c),o=i.contentList;return{contentList:o}},B=function(t){var e=Object(L["b"])(),c=Object(l["c"])(),a=c.params.id,i=Object(n["b"])((function(){return e.getters.getProductListById(a)})),o=function(t,c,n,a,i){e.commit("changeItemToCart",{shopId:t,productId:c,productInfo:n,number:a,shopName:i})};return{productList:i,changeItemToCart:o}},N={name:"Content",props:["shopName"],setup:function(t){var e=Object(l["c"])(),c=e.params.id,n=A(),a=n.currentTab,i=n.changeTab,o=P(a,e),r=o.contentList,s=B(t.shopName),u=s.productList,d=s.changeItemToCart;return{catagoryList:T,currentTab:a,changeTab:i,contentList:r,productList:u,shopId:c,changeItemToCart:d}}},x=(c("6c23"),c("6b0d")),D=c.n(x);const z=D()(N,[["render",S],["__scopeId","data-v-2467252c"]]);var U=z,J=function(t){return Object(n["w"])("data-v-2252fb9c"),t=t(),Object(n["u"])(),t},G={class:"cart"},K={key:0,class:"product"},V={class:"product__header"},q={class:"product__header__clear"},E=J((function(){return Object(n["g"])("div",{class:"product__gap"},null,-1)})),F={class:"product__content"},H={key:0,class:"product__content__item"},M=["onClick"],Q={class:"item__info"},R=["src"],W={class:"item__info__detail"},X={class:"title"},Y={class:"price"},Z=J((function(){return Object(n["g"])("span",{class:"price__yen"},"¥",-1)})),$={class:"price__origin"},tt={class:"item__info__number"},et=["onClick"],ct=["onClick"],nt={class:"check"},at={class:"check__icon"},it={class:"check__icon__tag"},ot={class:"check__info"},rt=Object(n["i"])(" 总计:"),st={class:"check__info__price"};function lt(t,e,c,a,i,o){return Object(n["t"])(),Object(n["f"])(n["a"],null,[a.show?(Object(n["t"])(),Object(n["f"])("div",{key:0,class:"mask",onClick:e[0]||(e[0]=function(){return a.handleClickCart&&a.handleClickCart.apply(a,arguments)})})):Object(n["e"])("",!0),Object(n["g"])("div",G,[a.show?(Object(n["t"])(),Object(n["f"])("div",K,[Object(n["g"])("div",V,[Object(n["g"])("div",{class:Object(n["p"])({product__header__icon:!0,iconfont:!0,"product__header__icon--active":a.allSelectedActive}),onClick:e[1]||(e[1]=function(){return a.changeAllSelected&&a.changeAllSelected.apply(a,arguments)})},"  ",2),Object(n["g"])("div",{class:"product__header__all",onClick:e[2]||(e[2]=function(){return a.changeAllSelected&&a.changeAllSelected.apply(a,arguments)})},"全选"),Object(n["g"])("div",q,[Object(n["g"])("span",{class:"product__header__clear__btn",onClick:e[3]||(e[3]=function(){return a.clearCart&&a.clearCart.apply(a,arguments)})},"清空购物车")])]),E,Object(n["g"])("div",F,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.productList,(function(t){var e;return Object(n["t"])(),Object(n["f"])(n["a"],{key:null===t||void 0===t?void 0:t._id},[0!=t.count?(Object(n["t"])(),Object(n["f"])("div",H,[Object(n["g"])("div",{class:Object(n["p"])({item__icon:!0,iconfont:!0,"item__icon--active":null===t||void 0===t?void 0:t.unselected}),onClick:function(){return a.changeSelected(t._id,t)}},"  ",10,M),Object(n["g"])("div",Q,[Object(n["g"])("img",{src:null===t||void 0===t?void 0:t.imgUrl,class:"item__info__img"},null,8,R),Object(n["g"])("div",W,[Object(n["g"])("h4",X,Object(n["C"])(null===t||void 0===t?void 0:t.name),1),Object(n["g"])("p",Y,[Z,Object(n["i"])(Object(n["C"])(null===t||void 0===t?void 0:t.price)+" ",1),Object(n["g"])("span",$,"¥"+Object(n["C"])(null===t||void 0===t?void 0:t.oldPrice),1)])]),Object(n["g"])("div",tt,[Object(n["g"])("span",{class:"minus",onClick:function(){return a.changeProductNum(t._id,-1)}},"-",8,et),Object(n["i"])(" "+Object(n["C"])(null!==(e=null===t||void 0===t?void 0:t.count)&&void 0!==e?e:0)+" ",1),Object(n["g"])("span",{class:"add",onClick:function(){return a.changeProductNum(t._id,1)}},"+",8,ct)])])])):Object(n["e"])("",!0)],64)})),128))])])):Object(n["e"])("",!0),Object(n["g"])("div",nt,[Object(n["g"])("div",at,[Object(n["g"])("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",alt:"",class:"check__icon__img",onClick:e[4]||(e[4]=function(){return a.handleClickCart&&a.handleClickCart.apply(a,arguments)})}),Object(n["g"])("div",it,Object(n["C"])(a.total),1)]),Object(n["g"])("div",ot,[rt,Object(n["g"])("span",st,"¥ "+Object(n["C"])(a.price),1)]),Object(n["g"])("div",{class:"check__button",onClick:e[5]||(e[5]=function(){return a.TogoOrderConfirm&&a.TogoOrderConfirm.apply(a,arguments)})},"去结算")])])],64)}function ut(t,e){var c=Object(n["b"])((function(){return t.getters.getProductListById(e)})),a=Object(n["b"])((function(){var c=!1,n=t.getters.getProductListById(e);if(n)for(var a in n){var i=n[a];if(i.unselected){c=!0;break}}return c})),i=function(c,n){t.commit("changeProductNum",{productId:c,number:n,shopId:e})},o=function(){t.commit("clearCart",{shopId:e})},r=function(c){t.commit("changeSelected",{shopId:e,productId:c})},s=function(){var c=a.value;t.commit("changeAllSelected",{shopId:e,refValue:c})};return{productList:c,changeProductNum:i,clearCart:o,changeSelected:r,allSelectedActive:a,changeAllSelected:s}}function dt(t,e){var c=Object(l["d"])(),a=Object(n["b"])((function(){return t.getters.getCountAndPriceByShopId(e).total})),i=Object(n["b"])((function(){return t.getters.getCountAndPriceByShopId(e).price})),o=Object(n["y"])(!1),r=function(){a.value>0?o.value=!o.value:o.value=!1},s=function(){i.value>0&&c.push("/orderConfirm/"+e)};return{total:a,handleClickCart:r,price:i,show:o,TogoOrderConfirm:s}}var bt={name:"Cart",setup:function(){var t=Object(L["b"])(),e=Object(l["c"])(),c=e.params.id,n=ut(t,c),a=n.productList,i=n.changeProductNum,o=n.clearCart,r=n.changeSelected,s=n.allSelectedActive,u=n.changeAllSelected,d=dt(t,c),b=d.total,O=d.handleClickCart,j=d.price,_=d.show,p=d.TogoOrderConfirm;return{shopId:c,total:b,price:j,show:_,handleClickCart:O,productList:a,changeProductNum:i,clearCart:o,changeSelected:r,allSelectedActive:s,changeAllSelected:u,TogoOrderConfirm:p}}};c("3323");const Ot=D()(bt,[["render",lt],["__scopeId","data-v-2252fb9c"]]);var jt=Ot,_t=function(t){var e=Object(n["x"])({item:{_id:!1}}),c=Object(n["D"])(e),a=c.item,i=function(){Object(u["a"])("/api/shop/".concat(t.params.id)).then((function(t){var c;0===(null===(c=t.data)||void 0===c?void 0:c.errno)&&(e.item=t.data.data)})).catch((function(t){console.log(t)}))};return{item:a,getDataItem:i}},pt=function(t){var e=function(){t.back()};return{handleBack:e}},gt={name:"Shop",components:{ShowInfor:d["a"],Content:U,Cart:jt},setup:function(){var t=Object(l["d"])(),e=Object(l["c"])(),c=_t(e),n=c.item,a=c.getDataItem,i=pt(t),o=i.handleBack;return a(),{item:n,handleBack:o}}};c("66e7");const ft=D()(gt,[["render",s],["__scopeId","data-v-eba44b50"]]);e["default"]=ft},"66e7":function(t,e,c){"use strict";c("567c")},"6c23":function(t,e,c){"use strict";c("d07b")},"739a":function(t,e,c){},"9f70":function(t,e,c){"use strict";c("739a")},d07b:function(t,e,c){},e2c7:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),a={class:"show"},i=["src"],o={class:"show__content__title"},r={class:"show__content__tags"},s={class:"tag"},l={class:"tag"},u={class:"tag"},d={class:"show__content__hightLight"};function b(t,e,c,b,O,j){return Object(n["t"])(),Object(n["f"])("div",a,[Object(n["g"])("img",{src:c.item.imgUrl,alt:"",class:"show__img"},null,8,i),Object(n["g"])("div",{class:Object(n["p"])({show__content:!0,"show__content--bordered":!c.hideBorder})},[Object(n["g"])("div",o,Object(n["C"])(c.item.name),1),Object(n["g"])("div",r,[Object(n["g"])("span",s,"月售:"+Object(n["C"])(c.item.sales),1),Object(n["g"])("span",l,"起送:"+Object(n["C"])(c.item.expressLimit),1),Object(n["g"])("span",u,"基础运费:"+Object(n["C"])(c.item.expressPrice),1)]),Object(n["g"])("p",d,Object(n["C"])(c.item.slogan),1)],2)])}var O={name:"ShowInfo",props:["item","hideBorder"]},j=(c("9f70"),c("6b0d")),_=c.n(j);const p=_()(O,[["render",b],["__scopeId","data-v-5c026403"]]);e["a"]=p}}]);
//# sourceMappingURL=shop.2d66ac52.js.map