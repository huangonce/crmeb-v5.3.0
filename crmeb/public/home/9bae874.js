(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{421:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("9fc41b48",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(421)},424:function(t,e,r){var n=r(2)((function(i){return i[1]}));n.push([t.i,".time[data-v-07fe60a7]{display:flex;justify-content:center}",""]),n.locals={},t.exports=n},425:function(t,e,r){"use strict";r(152);var n={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,r=0,n=0,o=0,d=0;e>0?(r=!0===t.isDay?Math.floor(e/86400):0,n=Math.floor(e/3600)-24*r,o=Math.floor(e/60)-24*r*60-60*n,d=Math.floor(e)-24*r*60*60-60*n*60-60*o,n<=9&&(n="0"+n),o<=9&&(o="0"+o),d<=9&&(d="0"+d),t.day=r,t.hour=n,t.minute=o,t.second=d):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}},o=(r(423),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"time acea-row row-middle",style:t.justifyLeft},[t.tipText?e("span",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),t._v(" "),!0===t.isDay?e("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),t._v(" "),t.dayText?e("span",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),t._v(" "),e("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),t._v(" "),t.hourText?e("span",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),t._v(" "),e("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),t._v(" "),t.minuteText?e("span",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),t._v(" "),e("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),t._v(" "),t.secondText?e("span",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()])}),[],!1,null,"07fe60a7",null);e.a=component.exports},477:function(t,e,r){var content=r(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("0fadf23c",content,!0,{sourceMap:!1})},562:function(t,e,r){"use strict";r(477)},563:function(t,e,r){var n=r(2),o=r(63),d=r(564),c=n((function(i){return i[1]})),l=o(d);c.push([t.i,".payment .header[data-v-1d7047de]{color:#999;margin-top:21px}.payment .header .home[data-v-1d7047de]{color:#282828}.payment .orderTip[data-v-1d7047de]{background:url("+l+") no-repeat;background-size:100% 100%;color:#fff;font-size:32px;height:159px;padding:55px 30px 31px;width:1200px}.payment .orderTip .times[data-v-1d7047de]{font-size:14px;margin-top:12px}.payment .detail[data-v-1d7047de]{background-color:#fff;height:182px;padding:31px 30px;width:100%}.payment .detail .item[data-v-1d7047de]{font-size:16px}.payment .detail .item~.item[data-v-1d7047de]{margin-top:12px}.payment .payType[data-v-1d7047de]{background-color:#fff;height:387px;margin-top:17px;width:100%}.payment .payType .title[data-v-1d7047de]{border-bottom:1px dotted #cecece;font-size:18px;height:57px;line-height:57px;padding:0 30px}.payment .payType .type[data-v-1d7047de]{padding:22px 50px 55px 30px}.payment .payType .type .item[data-v-1d7047de]{border:1px solid #d4d4d4;cursor:pointer;height:86px;position:relative;width:210px}.payment .payType .type .item~.item[data-v-1d7047de]{margin-left:20px}.payment .payType .type .item.on[data-v-1d7047de]{border-color:#e93323}.payment .payType .type .item .iconfont[data-v-1d7047de]{color:#09bb07;font-size:29px;margin-right:11px}.payment .payType .type .item .iconfont.icon-yue[data-v-1d7047de]{color:#fe9c01;font-size:32px}.payment .payType .type .item .icon-xuanzhong4[data-v-1d7047de]{bottom:-4px;margin:0!important;position:absolute;right:-4px}.payment .payType .type .item .name[data-v-1d7047de]{color:#4e4e4e;font-size:16px}.payment .payType .type .item .yue[data-v-1d7047de]{color:#969696;font-size:14px;margin-top:6px}.payment .payType .goPay[data-v-1d7047de]{margin:80px 50px 0 0}.payment .payType .goPay .bnt[data-v-1d7047de]{border-radius:4px;color:#fff;cursor:pointer;font-size:16px;height:46px;line-height:46px;text-align:center;width:180px}.payment .payType .icon-zhifubao[data-v-1d7047de]:before{color:#00aaea}",""]),c.locals={},t.exports=c},564:function(t,e,r){t.exports=r.p+"img/orderBg.a35620e.png"},634:function(t,e,r){"use strict";r.r(e);var n=r(11),o=r(4),d=(r(44),r(45),r(12),r(46),{name:"payment",auth:"guest",components:{countDown:r(425).a},data:function(){return{orderId:0,orderDetail:{cartInfo:[]},current:null,userInfo:{}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,d,c,l,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,o=t.query,e.next=3,Promise.all([r.$axios.get("/order/detail/"+o.result),r.$axios.get("/user")]);case 3:return d=e.sent,c=Object(n.a)(d,2),l=c[0],y=c[1],e.abrupt("return",{orderId:o.result,orderDetail:l.data,userInfo:y.data});case 8:case"end":return e.stop()}}),e)})))()},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},watch:{orderDetail:{handler:function(t){1==t.yue_pay_status?this.current=0:t.pay_weixin_open||t.ali_pay_status},deep:!0,immediate:!0}},head:function(){return{title:"支付-"+this.$store.state.titleCon}},created:function(){},mounted:function(){},methods:{currentPay:function(t){this.current=t,1!==t&&2!==t||this.$router.push({path:1===t?"/wxPay":"/aliPay",query:{orderId:this.orderId,totalPrice:this.orderDetail.pay_price}})},goPay:function(){var t=this;if(0===this.current&&parseFloat(t.userInfo.now_money)<parseFloat(t.orderDetail.pay_price))return t.$message.error("余额不足");t.$axios.post("/order/pay",{uni:t.orderId,paytype:"yue",from:"pc"}).then((function(e){t.$message.success(e.msg),t.$store.commit("cartNum",0),t.getOrderCoupon(t.orderId),setTimeout((function(){t.$router.push({path:"/order_detail",query:{orderId:t.orderId}})}),1e3)})).catch((function(e){t.$message.error(e),setTimeout((function(){t.$router.push({path:"/"})}),1e3)}))},getOrderCoupon:function(t){this.$axios.post("/v2/order/product_coupon/"+t).then((function(t){}))}}}),c=(r(562),r(16)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"payment wrapper_1200"},[t._m(0),t._v(" "),e("div",{staticClass:"orderTip"},[e("div",[t._v("订单提交成功！去付款咯~")]),t._v(" "),e("div",{staticClass:"times acea-row row-middle"},[e("div",[t._v("剩余时间：")]),t._v(" "),e("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" 小时 ","minute-text":" 分钟 ","second-text":"秒 ",datatime:t.orderDetail.stop_time}})],1)]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"item"},[t._v("订单编号："+t._s(t.orderId))]),t._v(" "),e("div",{staticClass:"item"},[t._v("\n      订单价格："),e("span",[t._v(t._s(t.orderDetail.pay_price)+"元")])]),t._v(" "),t.orderDetail.virtual_type?t._e():e("div",{staticClass:"item line1"},[t._v("\n      收货信息："+t._s(t.orderDetail.real_name)+" "+t._s(t.orderDetail.user_phone)+"\n      "+t._s(t.orderDetail.user_address)+"\n    ")]),t._v(" "),e("div",{staticClass:"item line1"},[t._v("\n      商品名称："+t._s(t.orderDetail.cartInfo.length?t.orderDetail.cartInfo[0].productInfo.store_name:"")+"\n    ")])]),t._v(" "),e("div",{staticClass:"payType"},[e("div",{staticClass:"title"},[t._v("选择以下支付方式")]),t._v(" "),e("div",{staticClass:"type acea-row row-middle"},[1==t.orderDetail.yue_pay_status?e("div",{staticClass:"item acea-row row-center-wrapper",class:0===t.current?"on":"",on:{click:function(e){return t.currentPay(0)}}},[e("div",{staticClass:"iconfont icon-yue"}),t._v(" "),e("div",[e("div",{staticClass:"name"},[t._v("余额支付")]),t._v(" "),e("div",{staticClass:"yue"},[t._v("余额："+t._s(t.userInfo.now_money))])]),t._v(" "),0===t.current?e("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]):t._e(),t._v(" "),t.orderDetail.pay_weixin_open?e("div",{staticClass:"item acea-row row-center-wrapper",class:1===t.current?"on":"",on:{click:function(e){return t.currentPay(1)}}},[e("div",{staticClass:"iconfont icon-weixinzhifu1"}),t._v(" "),t._m(1),t._v(" "),1===t.current?e("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]):t._e(),t._v(" "),t.orderDetail.ali_pay_status?e("div",{staticClass:"item acea-row row-center-wrapper",class:2===t.current?"on":"",on:{click:function(e){return t.currentPay(2)}}},[e("div",{staticClass:"iconfont icon-zhifubao"}),t._v(" "),t._m(2),t._v(" "),2===t.current?e("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]):t._e()]),t._v(" "),null!==t.current?e("div",{staticClass:"goPay acea-row row-right"},[e("div",{staticClass:"bnt bg-color",on:{click:t.goPay}},[t._v("去支付")])]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("span",{staticClass:"home"},[t._v("首页 > 个人中心 >")]),t._v("确认订单\n  ")])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"name"},[this._v("微信支付")])])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"name"},[this._v("支付宝支付")])])}],!1,null,"1d7047de",null);e.default=component.exports}}]);