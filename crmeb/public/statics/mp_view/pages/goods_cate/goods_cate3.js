(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate3"],{"0b2f":function(t,i,e){"use strict";e.r(i);var r=e("3b6b"),s=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=s.a},"303b":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var r=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("搜索商品名称")),r=t.__map(t.categoryList,(function(i,e){var r=t.__get_orig(i),s=t.$t(i.cate_name);return{$orig:r,m1:s}})),s=t.iSlong?t.__map(t.categoryErList,(function(i,e){var r=t.__get_orig(i),s=t.$t(i.cate_name);return{$orig:r,m2:s}})):null,a=t.iSlong?null:t.__map(t.categoryErList,(function(i,e){var r=t.__get_orig(i),s=t.$t(i.cate_name);return{$orig:r,m3:s}})),n=t.cartData.cartList.length,c=t.$t("￥"),o=t.$t("去付款");t.$mp.data=Object.assign({},{$root:{m0:e,l0:r,l1:s,l2:a,g0:n,m4:c,m5:o}})},s=[]},"3b6b":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e("2a39"),s=e("39ed"),a=e("26cb"),n=e("6557"),c=e("86eb"),o=t.getSystemInfoSync().windowHeight,u=t.getSystemInfoSync().statusBarHeight,h={computed:(0,a.mapGetters)(["isLogin","uid"]),components:{productWindow:function(){e.e("components/productWindow/index").then(function(){return resolve(e("6cd4"))}.bind(null,e)).catch(e.oe)},goodClass:function(){e.e("components/goodClass/index").then(function(){return resolve(e("3267"))}.bind(null,e)).catch(e.oe)},cartList:function(){e.e("components/cartList/index").then(function(){return resolve(e("d182"))}.bind(null,e)).catch(e.oe)},ParabalaBall:function(){e.e("components/parabolaBall/ParabolaBall").then(function(){return resolve(e("34e3"))}.bind(null,e)).catch(e.oe)}},props:{isNew:{type:Boolean,default:!1}},watch:{isNew:function(t){this.getAllCategory(1)}},data:function(){return{windowHeight:o,showCateDrawer:!1,sysHeight:u,categoryList:[],navActive:0,categoryTitle:"",categoryErList:[],tabLeft:0,scrollTop:0,old:{scrollTop:0},isWidth:0,tabClick:0,iSlong:!0,tempArr:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:10,cid:0,sid:0,isAuto:!1,isShowAuth:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],attrValue:"",storeName:"",id:0,cartData:{cartList:[],iScart:!1},cartCount:0,totalPrice:0,lengthCart:0,is_vip:0,cart_num:0,storeInfo:{},endLocation:{},scrollHeight:0}},onShow:function(){},onLoad:function(){var i=this;this.$nextTick((function(){t.createSelectorQuery().select("#cart").boundingClientRect((function(e){var r=t.getSystemInfoSync();r.windowTop;i.endLocation={x:e.left+t.upx2px(120)/2,y:e.top}})).exec()}))},mounted:function(){var i=this,e=this;e.lengthCart=e.cartData.cartList,t.getSystemInfo({success:function(t){e.isWidth=t.windowWidth/5}}),!e.categoryList.length&&this.getAllCategory(1),t.$on("uploadCatData",(function(){i.getAllCategory(1)})),setTimeout((function(){i.scrollHeight=o-80-u}),1e3)},methods:{jumpIndex:function(){this.$emit("jumpIndex")},addCart:function(t){},subOrder:function(){var i=this.cartData.cartList,e=[];if(!i.length)return this.$util.Tips({title:this.$t("请选择产品")});i.forEach((function(t){e.push(t.id)})),t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+e.join(",")}),this.cartData.iScart=!1},getTotalPrice:function(){var t=this,i=t.cartData.cartList,e=0;i.forEach((function(i){i.attrStatus&&i.status&&(e=t.$util.$h.Add(e,t.$util.$h.Mul(i.cart_num,i.truePrice)))})),t.$set(t,"totalPrice",e)},ChangeSubDel:function(t){var i=this,e=i.cartData.cartList,r=[];e.forEach((function(t){r.push(t.id)})),(0,s.cartDel)(r.join(",")).then((function(t){i.$set(i.cartData,"cartList",[]),i.cartData.iScart=!1,i.totalPrice=0,i.page=1,i.loadend=!1,i.tempArr=[],i.productslist(),i.getCartNum()}))},ChangeOneDel:function(t,i){var e=this,r=e.cartData.cartList;(0,s.cartDel)(t.toString()).then((function(t){r.splice(i,1),r.length||(e.cartData.iScart=!1,e.page=1,e.loadend=!1,e.tempArr=[],e.productslist()),e.getCartNum()}))},getCartList:function(t){var i=this;(0,s.vcartList)().then((function(e){i.$set(i.cartData,"cartList",e.data),e.data.length?i.$set(i.cartData,"iScart",!t&&!i.cartData.iScart):i.$set(i.cartData,"iScart",!1),i.getTotalPrice()}))},closeList:function(t){this.$set(this.cartData,"iScart",t),this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},getCartNum:function(){var t=this;(0,s.getCartCounts)().then((function(i){t.cartCount=i.data.count,t.$refs.goodClass.addIng=!1}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].stock>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var r=0;r<t.length;r++)this.$set(t[r],"index",i[r]);var s=this.productValue[i.join(",")];s&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",s.image),this.$set(this.attr.productSelect,"price",s.price),this.$set(this.attr.productSelect,"stock",s.stock),this.$set(this.attr.productSelect,"unique",s.unique),this.$set(this.attr.productSelect,"cart_num",this.storeInfo.min_qty),this.$set(this.attr.productSelect,"min_qty",this.storeInfo.min_qty),this.$set(this.attr.productSelect,"vip_price",s.vip_price),this.$set(this,"attrValue",i.join(","))):!s&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"min_qty",0),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price)):s||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",this.storeInfo.min_qty),this.$set(this.attr.productSelect,"min_qty",this.storeInfo.min_qty),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",this.storeInfo.min_qty),this.$set(this.attr.productSelect,"min_qty",this.storeInfo.min_qty),this.$set(this,"attrValue",t)):i&&0==i.stock?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"min_qty",0),this.$set(this,"attrValue","")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"min_qty",0),this.$set(this,"attrValue",""))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){var i=this;if(t){var e=this.storeInfo.min_qty;Number.isInteger(parseInt(t))&&parseInt(t)>=this.storeInfo.min_qty&&(e=parseInt(t)),this.$nextTick((function(t){i.$set(i.attr.productSelect,"cart_num",t<0?i.storeInfo.min_qty:e)}))}},onLoadFun:function(){},productslist:function(){var t=this,i=this;i.loadend||i.loading||(i.loading=!0,i.loadTitle="",(0,r.getProductslist)({page:i.page,limit:i.limit,type:1,cid:i.cid,sid:i.sid}).then((function(e){var r=e.data,s=r.length<i.limit;i.tempArr=i.$util.SplitArray(r,i.tempArr),i.$set(i,"tempArr",i.tempArr),i.loading=!1,i.loadend=s,i.loadTitle=s?i.$t("没有更多内容啦~"):i.$t("加载更多"),1==i.page&&t.goTop(),i.page=i.page+1})).catch((function(t){i.loading=!1,i.loadTitle=i.$t("加载更多")})))},ChangeCartNumDan:function(t,i,e){var r=this.tempArr[i],s=this.tempArr[i].stock;this.ChangeCartNum(t,r,s,0,e.id)},ChangeCartNumDuo:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,r=this.attr.productSelect;this.ChangeCartNum(t,r,e,1,this.id)}},ChangeCartList:function(t,i){var e=this.cartData.cartList,r=e[i],s=e[i].trueStock;return!t&&r.cart_num<=e[i].productInfo.min_qty?this.$util.Tips({title:this.$t("该商品".concat(e[i].productInfo.min_qty,"件起购"))}):t&&1==e[i].productInfo.limit_type&&r.cart_num>=e[i].productInfo.limit_num?(this.$set(r,"cart_num",e[i].productInfo.limit_num),void this.$util.Tips({title:this.$t("最大限购数量".concat(e[i].productInfo.limit_num))})):(this.ChangeCartNum(t,r,s,0,r.product_id,i,1),void(e.length||(this.cartData.iScart=!1,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist())))},ChangeCartNum:function(t,i,e,r,s,a,n){if(this.$refs.goodClass.addIng=!1,t){if(i.cart_num++,i.cart_num>e)return r?(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1)):(i.cart_num=e||0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)),this.$util.Tips({title:this.$t("该产品没有更多库存了")});r||(n?(this.goCat(0,s,1,1,i.product_attr_unique),this.getTotalPrice()):this.goCat(0,s,1))}else{if(i.cart_num<=i.min_qty)return this.$util.Tips({title:this.$t("该商品".concat(i.min_qty,"件起购"))});i.cart_num--,0==i.cart_num&&(this.cartData.cartList.splice(a,1),r&&(this.$set(this.attr.productSelect,"cart_num",this.storeInfo.min_qty),this.$set(this,"cart_num",this.storeInfo.min_qty))),i.cart_num<0?r?(this.$set(this.attr.productSelect,"cart_num",this.storeInfo.min_qty),this.$set(this,"cart_num",this.storeInfo.min_qty)):(i.cart_num=0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)):r||(n?(this.goCat(0,s,0,1,i.product_attr_unique,i),this.getTotalPrice()):this.goCat(0,s,0,0,!1,i))}},goCatNum:function(){this.goCat(1,this.id,1)},goCat:function(t,i,e,s,a,n){var c=this,o=this;if(t){var u=o.productValue[this.attrValue];if(o.attr.productAttr.length&&void 0===u)return o.$util.Tips({title:o.$t("该产品没有更多库存了")})}if(0==o.attr.productSelect.cart_num)return o.$util.Tips({title:o.$t("不能输入0喔")});var h={product_id:i,type:e,unique:t?o.attr.productSelect.unique:s?a:""};o.cartData.iScart||(h.num=t?o.attr.productSelect.cart_num:this.storeInfo.min_qty),n&&n.cart_num<n.min_qty&&(h.num=n.min_qty),(0,r.postCartNum)(h).then((function(i){t&&(o.attr.cartAttr=!1,o.$util.Tips({title:o.$t("添加成功")}),o.tempArr.forEach((function(t,i){if(t.id==o.id){var e=o.attr.productSelect.stock,r=parseInt(t.cart_num)+parseInt(o.attr.productSelect.cart_num);t.cart_num=r>e?e:r}}))),o.getCartNum(),s||o.getCartList(1)})).catch((function(t){return o.attr.productSelect.cart_num=c.storeInfo.min_qty||o.attr.productSelect.limit_num,o.$util.Tips({title:t})}))},goCartDan:function(i,e){if(this.isLogin){if(!i.cart_button)return void(0,n.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));!(this.tempArr[e].cart_num<=i.min_qty)||(this.tempArr[e].cart_num=i.min_qty),this.$set(this,"tempArr",this.tempArr),this.goCat(0,i.id,1,0,0,i)}else this.getIsLogin()},goCartDuo:function(i){if(this.isLogin){if(!i.cart_button)return void(0,n.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));t.showLoading({title:this.$t("正在加载中")}),this.storeName=i.store_name,this.getAttrs(i.id),this.$set(this,"id",i.id),this.$set(this.attr,"cartAttr",!0)}else this.getIsLogin()},getIsLogin:function(){(0,c.toLogin)()},getAttrs:function(i){var e=this;(0,r.getAttr)(i,0).then((function(i){t.hideLoading(),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.$set(e,"is_vip",i.data.storeInfo.is_vip),e.$set(e,"storeInfo",i.data.storeInfo),e.DefaultSelect()}))},goDetail:function(i){(0,n.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}))},openTap:function(){this.iSlong=!1},closeTap:function(){this.iSlong=!0},getAllCategory:function(i){var e=this;if(i||!t.getStorageSync("CAT3_DATA"))(0,r.getCategoryList)().then((function(i){var r=i.data;t.setStorageSync("CAT3_DATA",r),r.forEach((function(t){t.children.unshift({id:0,cate_name:e.$t("全部")})})),e.categoryTitle=r[0].cate_name,e.cid=r[0].id,e.sid=0,e.navActive=0,e.tabClick=0,e.categoryList=r,e.page=1,e.loadend=!1,e.tempArr=[],e.categoryErList=i.data[0].children?i.data[0].children:[],e.productslist()}));else{var s=t.getStorageSync("CAT3_DATA");s.forEach((function(t){t.children.unshift({id:0,cate_name:e.$t("全部")})})),e.cid||(e.categoryTitle=s[0].cate_name,e.cid=s[0].id,e.sid=0,e.navActive=0,e.tabClick=0,e.categoryList=s,e.page=1,e.loadend=!1,e.productslist())}},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},goTop:function(t){var i=this;this.scrollTop=this.old.scrollTop,this.$nextTick((function(){i.scrollTop=0}))},tapNav:function(t,i){var e=this.categoryList[t];this.navActive=t,this.categoryTitle=e.cate_name,this.categoryErList=i.children?i.children:[],this.tabClick=0,this.tabLeft=0,this.cid=e.id,this.sid=0,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},longClick:function(t){this.categoryErList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=this.categoryErList[t].id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()}}};i.default=h}).call(this,e("543d")["default"])},"75df":function(t,i,e){},7948:function(t,i,e){"use strict";var r=e("75df"),s=e.n(r);s.a},ada7:function(t,i,e){"use strict";e.r(i);var r=e("303b"),s=e("0b2f");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("7948");var n=e("f0c5"),c=Object(n["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);i["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate3-create-component',
    {
        'pages/goods_cate/goods_cate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ada7"))
        })
    },
    [['pages/goods_cate/goods_cate3-create-component']]
]);
