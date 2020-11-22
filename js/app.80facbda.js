(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0cec":function(t,e,n){},1543:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"PUSH_NOTIFICATION",(function(){return Ct})),n.d(r,"REMOVE_NOTIFICATION",(function(){return ht}));var a={};n.r(a),n.d(a,"addNotification",(function(){return gt})),n.d(a,"removeNotification",(function(){return Ot}));var o={};n.r(o),n.d(o,"SET_PRODUCTS",(function(){return Tt})),n.d(o,"SET_PRODUCT",(function(){return xt}));var c={};n.r(c),n.d(c,"getProducts",(function(){return It})),n.d(c,"getProduct",(function(){return kt}));var i={};n.r(i),n.d(i,"cartItemCount",(function(){return At})),n.d(i,"cartTotalPrice",(function(){return Nt}));var s={};n.r(s),n.d(s,"ADD_TO_CART",(function(){return qt})),n.d(s,"REMOVE_PRODUCT_FROM_CART",(function(){return Dt})),n.d(s,"CLEAR_CART_ITEMS",(function(){return Lt}));var u={};n.r(u),n.d(u,"addProductToCart",(function(){return Ut})),n.d(u,"removeProductFromCart",(function(){return Ft})),n.d(u,"clearCartItems",(function(){return Ht}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var d=n("2b0e"),l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("div",{staticClass:"container"},[n("router-view")],1),n("notifications-list")],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"nav navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/"}},[t._v("Home")]),n("a",{staticClass:"nav-item nav-link",attrs:{href:"#"}},[t._v("Product")])],1),n("div",[n("div",{staticClass:"dropdown open"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.cartItemCount)+" ")]),n("div",{on:{click:function(t){return t.stopPropagation()}}},[n("mini-cart")],1)])])])])])},v=[],_=n("5530"),b=n("2f62"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-menu p-2",staticStyle:{"min-width":"320px",right:"0",left:"auto"},attrs:{"aria-labelledby":"triggerId"}},[t._l(t.cart,(function(e){return n("div",{key:e.product.id},[n("div",{staticClass:"px-2 d-flex justify-content-between"},[n("div",[n("strong",[t._v(t._s(e.product.title))]),n("br"),t._v(" "+t._s(e.quantity)+" x Rp"+t._s(e.product.price)+" ")]),n("div",[n("a",{staticClass:"badge badge-secondary",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.removeProductFromCart(e.product)}}},[t._v("Remove")])])]),n("hr")])})),n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("Total: Rp"+t._s(t.cartTotalPrice))]),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearCartItems()}}},[t._v("Clear Cart")])])],2)},h=[],g={computed:Object(_["a"])(Object(_["a"])({},Object(b["d"])({cart:function(t){return t.cartModule.cart}})),Object(b["c"])("cartModule",["cartTotalPrice"])),methods:Object(_["a"])({},Object(b["b"])("cartModule",["removeProductFromCart","clearCartItems","getCartItems"])),mounted:function(){this.$store.dispatch("getCartItems")}},O=g,y=n("2877"),j=Object(y["a"])(O,C,h,!1,null,null,null),T=j.exports,x={components:{MiniCart:T},computed:Object(_["a"])({},Object(b["c"])("cartModule",["cartItemCount"]))},P=x,w=Object(y["a"])(P,m,v,!1,null,null,null),E=w.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notifications-list"},t._l(t.notifications,(function(t){return n("notification-message",{key:t.id,attrs:{notification:t}})})),1)},R=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-dismissible fade show",class:t.typeClass,attrs:{role:"alert"}},[t._m(0),n("strong",[t._v(t._s(t.notification.message))])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")]),n("span",{staticClass:"sr-only"},[t._v("Close")])])}],$={props:["notification"],data:function(){return{timeout:null}},computed:{typeClass:function(){return"alert-".concat(this.notification.type)}},created:function(){var t=this;this.timeout=setTimeout((function(){t.removeNotification(t.notification)}),3e3)},beforeDestroy:function(){clearTimeout(this.timeout)},methods:Object(b["b"])(["removeNotification"])},S=$,A=Object(y["a"])(S,I,k,!1,null,null,null),N=A.exports,q={components:{NotificationMessage:N},computed:Object(b["d"])(["notifications"])},D=q,L=(n("7c12"),Object(y["a"])(D,M,R,!1,null,null,null)),U=L.exports,F={name:"app",components:{AppHeader:E,NotificationsList:U}},H=F,V=(n("034f"),Object(y["a"])(H,p,f,!1,null,null,null)),J=V.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("product-list")],1)},B=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.products?t._e():n("div",{staticClass:"mt-5 d-flex justify-content-center"},[t._m(0),t._m(1),t._m(2)]),t.products?n("div",{staticClass:"d-flex align-items-stretch flex-wrap"},t._l(t.products,(function(t){return n("product-card",{key:t.id,attrs:{product:t}})})),1):t._e()])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-dark m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-primary m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-dark m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 mt-3"},[n("div",{staticClass:"card h-100 text-left"},[n("img",{staticClass:"w-100",attrs:{src:"https://via.placeholder.com/150x100",alt:""}}),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[n("router-link",{attrs:{to:{name:"product",params:{id:t.product.id}}}},[t._v(t._s(t.product.title))])],1),n("strong",[t._v("Rp"+t._s(t.product.price))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.publisher))]),n("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.addToCart()}}},[t._v("Add to Cart")])])])])},W=[],X={props:["product"],methods:Object(_["a"])(Object(_["a"])({},Object(b["b"])("cartModule",["addProductToCart"])),{},{addToCart:function(){this.addProductToCart({product:this.product,quantity:1})}})},Y=X,Z=Object(y["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports,et={components:{ProductCard:tt},computed:Object(_["a"])({},Object(b["d"])({products:function(t){return t.productModule.products}})),methods:Object(_["a"])({},Object(b["b"])("productModule",["getProducts"])),mounted:function(){this.getProducts()}},nt=et,rt=Object(y["a"])(nt,G,K,!1,null,null,null),at=rt.exports,ot={components:{ProductList:at}},ct=ot,it=Object(y["a"])(ct,z,B,!1,null,null,null),st=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.product?t._e():n("div",{staticClass:"mt-5 d-flex justify-content-center"},[t._m(0),t._m(1),t._m(2)]),t.product?n("div",{staticClass:"row mt-5"},[t._m(3),n("div",{staticClass:"col-sm-8 text-left"},[n("h1",[t._v(t._s(t.product.title))]),n("h3",[t._v("Rp"+t._s(t.product.price))]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"text-center col-1 mr-2 p-1",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addToCart()}}},[t._v("Add to Cart")]),n("p",{staticClass:"mt-4"},[t._v(t._s(t.product.publisher))]),n("div",{staticClass:"row"},[n("h5",{staticClass:"col-sm-5"},[t._v(t._s(t.product.author))]),n("p",{staticClass:"col-sm-4"},[n("i",[t._v(t._s(t.product.isbn))])]),n("p",{staticClass:"col-sm-3"},[t._v(t._s(t.product.year))])])])]):t._e()])},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-dark m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-primary m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow text-dark m-5"},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-4"},[n("img",{staticClass:"w-100",attrs:{src:"https://via.placeholder.com/150x100"}})])}],lt={props:["id"],data:function(){return{quantity:1}},methods:Object(_["a"])(Object(_["a"])(Object(_["a"])({},Object(b["b"])("productModule",["getProduct"])),Object(b["b"])("cartModule",["addProductToCart"])),{},{addToCart:function(){this.addProductToCart({product:this.product,quantity:this.quantity})}}),computed:Object(_["a"])({},Object(b["d"])({product:function(t){return t.productModule.product}})),mounted:function(){this.getProduct(this.id)}},pt=lt,ft=Object(y["a"])(pt,ut,dt,!1,null,null,null),mt=ft.exports,vt=[{path:"/",component:st,name:"home"},{path:"/product/:id",component:mt,name:"product",props:!0}],_t={notifications:[]},bt=n("94d5"),Ct=(n("4de4"),n("d3b7"),n("25f0"),function(t,e){t.notifications.push(Object(_["a"])(Object(_["a"])({},e),{},{id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)}))}),ht=function(t,e){t.notifications=t.notifications.filter((function(t){return t.id!=e.id}))},gt=function(t,e){var n=t.commit;n("PUSH_NOTIFICATION",e)},Ot=function(t,e){var n=t.commit;n("REMOVE_NOTIFICATION",e)},yt={products:[],product:null},jt=n("1543"),Tt=function(t,e){t.products=e},xt=function(t,e){t.product=e},Pt=n("bc3a"),wt=n.n(Pt),Et=wt.a.create({baseURL:"http://api.sunhouse.co.id/bookstore/index.php/books"}),Mt=Et,Rt={all:function(){return Mt.get("/")},show:function(t){return Mt.get("/".concat(t))}},It=function(t){var e=t.commit;Rt.all().then((function(t){e("SET_PRODUCTS",t.data)}))},kt=function(t,e){var n=t.commit;Rt.show(e).then((function(t){n("SET_PRODUCT",t.data)}))},$t={namespaced:!0,state:yt,getters:jt,mutations:o,actions:c},St={cart:[]},At=(n("4160"),n("159b"),function(t){return t.cart.length}),Nt=function(t){var e=0;return t.cart.forEach((function(t){e+=t.product.price*t.quantity})),e},qt=(n("7db0"),function(t,e){var n=e.product,r=e.quantity,a=t.cart.find((function(t){return t.product.id===n.id}));a?a.quantity+=r:t.cart.push({product:n,quantity:r})}),Dt=function(t,e){t.cart=t.cart.filter((function(t){return t.product.id!==e.id}))},Lt=function(t){t.cart=[]},Ut=function(t,e){var n=t.commit,r=t.dispatch,a=e.product,o=e.quantity;n("ADD_TO_CART",{product:a,quantity:o}),r("addNotification",{type:"success",message:"Product added to Cart"},{root:!0})},Ft=function(t,e){var n=t.commit,r=t.dispatch;n("REMOVE_PRODUCT_FROM_CART",e),r("addNotification",{type:"warning",message:"Product removed from Cart"},{root:!0})},Ht=function(t){var e=t.commit,n=t.dispatch;e("CLEAR_CART_ITEMS"),n("addNotification",{type:"danger",message:"ALL Products removed from Cart"},{root:!0})},Vt={namespaced:!0,state:St,getters:i,mutations:s,actions:u};d["a"].use(b["a"]);var Jt=new b["a"].Store({state:_t,getters:bt,mutations:r,actions:a,modules:{productModule:$t,cartModule:Vt}});n("4989"),n("ab8b");d["a"].use(l["a"]);var zt=new l["a"]({routes:vt,mode:"history"});d["a"].config.productionTip=!1,new d["a"]({router:zt,store:Jt,render:function(t){return t(J)}}).$mount("#app")},"7c12":function(t,e,n){"use strict";n("0cec")},"85ec":function(t,e,n){},"94d5":function(t,e){}});
//# sourceMappingURL=app.80facbda.js.map