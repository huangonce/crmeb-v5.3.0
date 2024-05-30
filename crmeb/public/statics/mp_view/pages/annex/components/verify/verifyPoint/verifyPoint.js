require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/components/verify/verifyPoint/verifyPoint"],{"1d8f":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.tempPoints,(function(e,n){var i=t.__get_orig(e),r=parseInt(e.y-10),c=parseInt(e.x-10);return{$orig:i,m0:r,m1:c}})));t._isMounted||(t.e0=function(e){t.bindingClick&&t.canvasClick(e)}),t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},3856:function(t,e,n){},"3cc2":function(t,e,n){"use strict";var i=n("3856"),r=n.n(i);r.a},"6a64":function(t,e,n){"use strict";n.r(e);var i=n("1d8f"),r=n("d113");for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("3cc2");var o=n("f0c5"),a=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"77c52606",null,!1,i["a"],void 0);e["default"]=a.exports},"7d0a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("67e3"),r=n("5743"),c={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String},vSpace:{type:Number,default:5},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",checkNum:3,fontPos:[],checkPosArr:[],num:1,pointBackImgBase:"",poinTextList:[],backToken:"",imgRand:0,setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},showImage:!0,tempPoints:[],text:"",barAreaColor:"#fff",barAreaBorderColor:"#fff",showRefresh:!0,bindingClick:!0,imgLeft:"",imgTop:""}},methods:{init:function(){var t=this;this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.$nextTick((function(){t.refresh(),t.$parent.$emit("ready",t)}))},canvasClick:function(e){var n=this,c=t.createSelectorQuery().in(this);c.select("#image").boundingClientRect((function(t){n.imgLeft=Math.ceil(t.left),n.imgTop=Math.ceil(t.top),n.checkPosArr.push(n.getMousePos(n.$refs.canvas,e)),n.num==n.checkNum&&(n.num=n.createPoint(n.getMousePos(n.$refs.canvas,e)),n.checkPosArr=n.pointTransfrom(n.checkPosArr,n.imgSize),setTimeout((function(){var t=n.secretKey?(0,i.aesEncrypt)(n.backToken+"---"+JSON.stringify(n.checkPosArr),n.secretKey):n.backToken+"---"+JSON.stringify(n.checkPosArr),e={captchaType:n.captchaType,pointJson:n.secretKey?(0,i.aesEncrypt)(JSON.stringify(n.checkPosArr),n.secretKey):JSON.stringify(n.checkPosArr),token:n.backToken};(0,r.ajcaptchaCheck)(e).then((function(e){e.data;n.barAreaColor="#4cae4c",n.barAreaBorderColor="#5cb85c",n.text="验证成功",n.bindingClick=!1,setTimeout((function(){"pop"==n.mode&&(n.$parent.clickShow=!1),n.refresh()}),1500),n.$emit("success",{captchaVerification:t})})).catch((function(t){n.$parent.$emit("error",n),n.barAreaColor="#d9534f",n.barAreaBorderColor="#d9534f",n.text="验证失败",setTimeout((function(){n.refresh()}),700)}))}),400)),n.num<n.checkNum&&(n.num=n.createPoint(n.getMousePos(n.$refs.canvas,e)))})).exec()},getMousePos:function(t,e){var n={x:Math.ceil(e.detail.x)-this.imgLeft,y:Math.ceil(e.detail.y)-this.imgTop};return n},createPoint:function(t){return this.tempPoints.push(Object.assign({},t)),++this.num},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.showRefresh=!0},getPictrue:function(){var e=this,n={captchaType:this.captchaType,clientUid:t.getStorageSync("point"),ts:Date.now()};(0,r.getAjcaptcha)(n).then((function(t){var n=t.data;e.pointBackImgBase=n.originalImageBase64,e.backToken=n.token,e.secretKey=n.secretKey,e.poinTextList=n.wordList,e.text="请依次点击【"+e.poinTextList.join(",")+"】"})).catch((function(){e.pointBackImgBase=null}))},pointTransfrom:function(t,e){var n=t.map((function(t){var n=Math.round(310*t.x/parseInt(e.width)),i=Math.round(155*t.y/parseInt(e.height));return{x:n,y:i}}));return n}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){}};e.default=c}).call(this,n("543d")["default"])},d113:function(t,e,n){"use strict";n.r(e);var i=n("7d0a"),r=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/annex/components/verify/verifyPoint/verifyPoint-create-component',
    {
        'pages/annex/components/verify/verifyPoint/verifyPoint-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6a64"))
        })
    },
    [['pages/annex/components/verify/verifyPoint/verifyPoint-create-component']]
]);
