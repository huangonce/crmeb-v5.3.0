require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_integral/index"],{"1adf":function(t,n,e){"use strict";var i=e("b102"),a=e.n(i);a.a},4153:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("当前积分")),i=t.$t("累计积分"),a=t.$t("累计消费"),o=t.$t("冻结积分"),r=t.$t("积分规则"),l=t.integralList.length,s=t.isTime?null:t.$t("提示：积分数值的高低会直接影响您的会员等级"),u=t.isTime?t.$t("提示：你有"):null,c=t.isTime?t.$t("积分在"):null,f=t.isTime?t._f("dateFormat")(t.userInfo.clear_time):null,d=t.isTime?t.$t("过期，请尽快使用"):null,g=t.__map(t.integralList,(function(n,e){var i=t.__get_orig(n),a=t.$t(n.title);return{$orig:i,m9:a}})),m=t.integralList.length,h=t.integralList.length,$=0==h?t.$t("暂无积分记录哦～"):null,p=t.$t("购买商品可获得积分奖励"),v=t.$t("赚积分"),L=t.$t("每日签到可获得积分奖励"),b=t.$t("赚积分");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:a,m3:o,m4:r,g0:l,m5:s,m6:u,m7:c,f0:f,m8:d,l0:g,g1:m,g2:h,m10:$,m11:p,m12:v,m13:L,m14:b}})},a=[]},"50b2":function(t,n,e){"use strict";e.r(n);var i=e("4153"),a=e("d92d");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("1adf");var r=e("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7484b6d4",null,!1,i["a"],void 0);n["default"]=l.exports},"999f":function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("4789");i(e("66fd"));var a=i(e("50b2"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},b102:function(t,n,e){},cce4:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("d1ea"),o=i(e("224b")),r=e("86eb"),l=e("26cb"),s=i(e("19b6")),u={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("ad23"))}.bind(null,e)).catch(e.oe)},emptyPage:function(){e.e("components/emptyPage").then(function(){return resolve(e("42ff"))}.bind(null,e)).catch(e.oe)}},filters:{dateFormat:function(t){return(0,o.default)(1e3*t).format("YYYY-MM-DD")}},mixins:[s.default],data:function(){return{navList:[{name:this.$t("分值明细"),icon:"icon-mingxi"},{name:this.$t("分值提升"),icon:"icon-tishengfenzhi"}],current:0,page:1,limit:10,integralList:[],userInfo:{},loadend:!1,loading:!1,loadTitle:this.$t("加载更多"),isAuto:!1,isShowAuth:!1,isTime:0}},computed:(0,l.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.getUserInfo(),this.getIntegralList())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.getIntegralList()):(0,r.toLogin)()},onReachBottom:function(){this.getIntegralList()},methods:{onLoadFun:function(){this.getUserInfo(),this.getIntegralList()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,a.postSignUser)({sign:1,integral:1,all:1}).then((function(n){t.$set(t,"userInfo",n.data);var e=n.data.clear_time,i=e-1209600,a=Date.parse(new Date)/1e3;t.isTime=i<a?1:0}))},getIntegralList:function(){var t=this;t.loading||t.loadend||(t.loading=!0,t.loadTitle="",(0,a.getIntegralList)({page:t.page,limit:t.limit}).then((function(n){var e=n.data,i=e.length<t.limit;t.integralList=t.$util.SplitArray(e,t.integralList),t.$set(t,"integralList",t.integralList),t.page=t.page+1,t.loading=!1,t.loadend=i,t.loadTitle=i?t.$t("我也是有底线的"):t.$t("加载更多")}),(function(n){this.loading=!1,t.loadTitle=t.$t("加载更多")})))},nav:function(t){this.current=t}}};n.default=u},d92d:function(t,n,e){"use strict";e.r(n);var i=e("cce4"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}},[["999f","common/runtime","common/vendor"]]]);