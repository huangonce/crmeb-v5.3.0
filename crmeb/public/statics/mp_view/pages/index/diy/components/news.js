(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/news"],{"5b0f":function(t,n,i){"use strict";var o=i("63ae"),e=i.n(o);e.a},"63ae":function(t,n,i){},"947e":function(t,n,i){"use strict";i.r(n);var o=i("d07b"),e=i("e9e3");for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("5b0f");var f=i("f0c5"),u=Object(f["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},b333:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"news",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{indicatorDots:!1,autoplay:!0,duration:500,itemNew:this.dataConfig.listConfig.list,logoConfig:this.dataConfig.logoConfig.url,mbConfig:this.dataConfig.mbConfig.val,txtStyle:this.dataConfig.txtStyle.type,txtColor:this.dataConfig.txtColor.color[0].item,bgColor:this.dataConfig.bgColor.color[0].item,bgStyle:this.dataConfig.bgStyle.type,prConfig:this.dataConfig.prConfig.val}},created:function(){},mounted:function(){},methods:{jump:function(t){this.$util.JumpPath(t)}}};n.default=o},d07b:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,this.itemNew.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},e=[]},e9e3:function(t,n,i){"use strict";i.r(n);var o=i("b333"),e=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/news-create-component',
    {
        'pages/index/diy/components/news-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("947e"))
        })
    },
    [['pages/index/diy/components/news-create-component']]
]);
