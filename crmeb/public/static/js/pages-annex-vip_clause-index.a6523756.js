(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-vip_clause-index"],{"0080":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"uni-page-body[data-v-6ef41b0c]{background-color:#fff}body.?%PAGE?%[data-v-6ef41b0c]{background-color:#fff}",""]),n.exports=t},"0715":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("d1ea"),i={data:function(){return{agreement:""}},onLoad:function(){this.memberCard()},methods:{memberCard:function(){var n=this;uni.showLoading({title:this.$t("正在加载中")}),(0,a.memberCard)().then((function(t){uni.hideLoading();var e=t.data.member_explain;n.agreement=e})).catch((function(n){uni.hideLoading()}))}}};t.default=i},"243b":function(n,t,e){var a=e("0080");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("6daff92d",a,!0,{sourceMap:!1,shadowMode:!1})},2495:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-6ef41b0c]{padding-top:%?10?%;font-size:%?30?%;text-align:center;font-weight:700}.cont[data-v-6ef41b0c]{padding:%?50?% %?30?%}.cont[data-v-6ef41b0c] img{max-width:100%!important}',""]),n.exports=t},3116:function(n,t,e){"use strict";e.r(t);var a=e("e5cf"),i=e("fd4c");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("bc9e"),e("eeec");var c=e("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"6ef41b0c",null,!1,a["a"],void 0);t["default"]=r.exports},6385:function(n,t,e){var a=e("2495");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("13e5601b",a,!0,{sourceMap:!1,shadowMode:!1})},bc9e:function(n,t,e){"use strict";var a=e("243b"),i=e.n(a);i.a},e5cf:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this.$createElement,t=this._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticClass:"title"},[this._v(this._s(this.agreement.title||""))]),t("v-uni-view",{staticClass:"cont",domProps:{innerHTML:this._s(this.agreement.content)}})],1)},i=[]},eeec:function(n,t,e){"use strict";var a=e("6385"),i=e.n(a);i.a},fd4c:function(n,t,e){"use strict";e.r(t);var a=e("0715"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a}}]);