(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c67a888c"],{"00461":function(a,t,e){"use strict";e.r(t),e("b0c0"),e("ac1f"),e("5319"),e("d3b7"),e("159b"),e("14d9");var s=e("f8b7"),n=e("d044"),i=e.n(n),r=e("d708");n={data:function(){return{columns:[{title:"商品编号",key:"index",align:"center",width:60},{title:"商品名称",slot:"store_name",align:"center",minWidth:253},{title:"商品规格",slot:"suk",align:"center",width:219},{title:"单价",key:"price",align:"center",width:100},{title:"数量",key:"num",align:"center",width:60},{title:"金额",key:"subtotal",align:"center",width:100}],orderData:{},BaseURL:r.a.apiBaseURL.replace(/adminapi/,""),newArrayData:[],site_name:"",refund_phone:"",refund_address:""}},created:function(){this.getDistribution()},mounted:function(){},methods:{creatQrCode:function(){var a=window.location.origin+"/pages/goods/order_details/index?order_id="+this.$route.query.id;this.newArrayData.forEach((function(t,e){e=document.getElementById("qrCodeUrl"+e),new i.a(e,{text:a,width:90,height:90,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.a.CorrectLevel.H})}))},getDistribution:function(){var a=this;Object(s.d)(this.$route.query.id).then((function(t){a.orderData=t.data;var e=[];t.data.product_info.forEach((function(a,t){var s=Math.floor(t/6);e[s]||(e[s]=[]),a.index=t+1,e[s].push(a)})),a.newArrayData=e,setTimeout((function(){a.creatQrCode()}),200)})).catch((function(t){a.$Message.error(t.msg)}))}}},e("89a9"),e=e("2877"),e=Object(e.a)(n,(function(){var a=this,t=a._self._c;return t("div",{staticClass:"order-bgc"},a._l(a.newArrayData,(function(e,s){return t("div",{key:s,staticClass:"putSupplier perpage"},[t("div",{staticClass:"header acea-row row-between-wrapper"},[t("div",{staticClass:"left acea-row row-middle"},[t("div",{staticClass:"info"},[t("div",[t("span",{staticClass:"name"},[a._v("收货人：")]),a._v(a._s(a.orderData.user_name))]),t("div",[t("span",{staticClass:"name"},[a._v("收货地址：")]),a._v(a._s(a.orderData.user_address))]),t("div",[t("span",{staticClass:"name"},[a._v("手机号：")]),t("span",[a._v(a._s(a.orderData.user_phone))])])])]),t("div",{staticClass:"info"},[t("div",[t("span",{staticClass:"name"},[a._v("订单编号：")]),a._v(a._s(a.orderData.order_id))]),t("div",[t("span",{staticClass:"name"},[a._v("支付时间：")]),a._v(a._s(a.orderData.pay_time))]),t("div",[t("span",{staticClass:"name"},[a._v("支付方式：")]),a._v(a._s(a.orderData.pay_type))])])]),t("div",{staticClass:"mt20"},[t("el-table",{attrs:{border:"",columns:a.columns,data:e,"disabled-hover":!0}},[t("el-table-column",{attrs:{label:"商品编号",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname"},[a._v(a._s(e.row.index)+" ")])]}}],null,!0)}),t("el-table-column",{attrs:{label:"商品名称"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname line2"},[a._v(a._s(e.row.name)+" ")])]}}],null,!0)}),t("el-table-column",{attrs:{label:"商品规格"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname"},[a._v(a._s(e.row.sku)+" ")])]}}],null,!0)}),t("el-table-column",{attrs:{label:"单价"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname"},[a._v(a._s(e.row.price))])]}}],null,!0)}),t("el-table-column",{attrs:{label:"数量"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname"},[a._v(a._s(e.row.num)+" ")])]}}],null,!0)}),t("el-table-column",{attrs:{label:"金额"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",{staticClass:"nickname"},[a._v(a._s(e.row.sum_price))])]}}],null,!0)})],1)],1),t("div",{staticClass:"bottom acea-row row-between-wrapper"},[t("div",{staticClass:"acea-row row-middle"},[t("div",{staticClass:"item"},[t("span",{staticClass:"name"},[a._v("运费：")]),a._v(a._s(a.orderData.pay_postage))]),t("div",{staticClass:"item"},[t("span",{staticClass:"name"},[a._v("优惠：")]),a._v(a._s(a.orderData.coupon_price))]),t("div",{staticClass:"item"},[t("span",{staticClass:"name"},[a._v("会员折扣：")]),a._v(a._s(a.orderData.vip_price))]),t("div",{staticClass:"item"},[t("span",{staticClass:"name"},[a._v("积分抵扣：")]),a._v(a._s(a.orderData.deduction_price))])]),t("div",{staticClass:"pricePay"},[a._v("实付金额："+a._s(a.orderData.pay_price))])]),t("div",{staticClass:"bottom acea-row"},[t("div",{staticClass:"name"},[a._v("\n        用户备注："),t("span",{staticClass:"con"},[a._v(a._s(a.orderData.mark||"-"))])])])])})),0)}),[],!1,null,"91740d48",null);t.default=e.exports},"89a9":function(a,t,e){"use strict";e("f432")},f432:function(a,t,e){}}]);