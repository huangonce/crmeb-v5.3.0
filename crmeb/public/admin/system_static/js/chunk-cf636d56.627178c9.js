(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cf636d56"],{"31b4":function(t,e,a){"use strict";a("a630"),a("3ca3");var l=a("5530"),s=(a("d3b7"),a("159b"),a("30ba")),i=(s=a.n(s),a("6b6c")),r=a("2f62");s={name:"edit",components:{formCreate:s.a.$form()},computed:Object(l.a)({},Object(r.d)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},watch:{FromData:function(){this.FromData.rules.forEach((function(t){t.title+="："}))}},data:function(){return{modals:!1,type:0,loading:!1,fapi:null,config:{form:{labelWidth:"100px"},resetBtn:!1,submitBtn:!1,global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.$message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},formSubmit:function(){this.fapi.submit()},onSubmit:function(t){var e=this;this.loading||(this.loading=!0,Object(i.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){e.update&&e.$parent.getList(),e.$message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail"),e.loading=!1}),1e3)})).catch((function(t){e.loading=!1,e.$message.error(t.msg)})))},cancel:function(){this.type=0}}},a("fae3"),l=a("2877"),r=Object(l.a)(s,(function(){var t=this,e=t._self._c;return t.FromData?e("div",[e("el-dialog",{attrs:{visible:t.modals,title:t.FromData.title,"z-index":1,width:"720px"},on:{"update:visible":function(e){t.modals=e},closed:t.cancel}},[["/marketing/coupon/save.html"===t.FromData.action?e("div",{staticClass:"radio acea-row row-middle"},[e("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),e("el-radio-group",{on:{input:t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("el-radio",{attrs:{label:0}},[t._v("通用券")]),e("el-radio",{attrs:{label:1}},[t._v("品类券")]),e("el-radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],e("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(this.FromData.rules),handleIcon:"false"},on:{submit:t.onSubmit},model:{value:t.fapi,callback:function(e){t.fapi=e},expression:"fapi"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.modals=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.formSubmit}},[t._v("确 定")])],1)],2)],1):t._e()}),[],!1,null,"224af4d2",null);e.a=r.exports},4967:function(t,e,a){},4982:function(t,e,a){},d0ee:function(t,e,a){"use strict";a("4982")},fae3:function(t,e,a){"use strict";a("4967")},fe78:function(t,e,a){"use strict";a.r(e),a("b0c0");var l=a("c7eb"),s=a("1da1"),i=a("5530"),r=a("2f62"),o=a("c24f"),n=(a("a434"),{name:"task",components:{editFrom:a("31b4").a},data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},modals:!1,levelFrom:{is_show:"",name:"",page:1,limit:20},total:0,levelLists:[],loading:!1,FromData:null,ids:0,titleType:"task"}},computed:Object(i.a)(Object(i.a)(Object(i.a)({},Object(r.d)("media",["isMobile"])),Object(r.d)("userLevel",["levelId"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(i.a)(Object(i.a)({},Object(r.c)("userLevel",["getTaskId","getlevelId"])),{},{add:function(){this.ids="",this.getFrom()},getFrom:function(){var t=this,e={id:this.ids,level_id:this.levelId};this.$modalForm(Object(o.e)(e)).then((function(){return t.getList()}))},edit:function(t){this.ids=t.id,this.getFrom()},handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var t=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(o.H)(this.levelId,this.levelFrom).then(function(){var e=Object(s.a)(Object(l.a)().mark((function e(a){var s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.data,t.levelLists=s.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},onchangeIsShow:function(t){var e=this;t={id:t.id,is_show:t.is_show};Object(o.F)(t).then(function(){var t=Object(s.a)(Object(l.a)().mark((function t(a){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.msg)}))},onchangeIsMust:function(t){var e=this;t={id:t.id,is_must:t.is_must};Object(o.E)(t).then(function(){var t=Object(s.a)(Object(l.a)().mark((function t(a){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.msg)}))},submitFail:function(){this.getList()},del:function(t,e,a){var l=this;e={title:e,num:a,url:"user/user_level/delete_task/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){l.$message.success(t.msg),l.levelLists.splice(a,1)})).catch((function(t){l.$message.error(t.msg)}))}})}),c=a("2877");Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.modals,title:"等级任务","close-on-click-modal":!1,width:"1000px"},on:{"update:visible":function(e){t.modals=e},closed:t.handleReset}},[e("el-form",{ref:"levelFrom",attrs:{model:t.levelFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-row",{attrs:{gutter:24}},[e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"等级状态："}},[e("el-select",{attrs:{placeholder:"是否显示",clearable:""},on:{change:t.userSearchs},model:{value:t.levelFrom.is_show,callback:function(e){t.$set(t.levelFrom,"is_show",e)},expression:"levelFrom.is_show"}},[e("el-option",{attrs:{value:"1",label:"显示"}}),e("el-option",{attrs:{value:"0",label:"不显示"}})],1)],1)],1),e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"等级名称：",prop:"status2","label-for":"status2"}},[e("el-input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":t.userSearchs},model:{value:t.levelFrom.name,callback:function(e){t.$set(t.levelFrom,"name",e)},expression:"levelFrom.name"}})],1)],1)],1)],1),e("el-divider",{attrs:{direction:"vertical",dashed:""}}),e("el-row",[e("el-col",t._b({staticClass:"mb15"},"el-col",t.grid,!1),[e("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加等级任务")])],1),e("el-col",{staticClass:"userAlert",attrs:{span:24}},[e("el-alert",{attrs:{"show-icon":"",closable:""}},[e("template",{slot:"title"},[t._v("\n          添加等级任务,任务类型中的{$num}会自动替换成限定数量+系统预设的单位生成任务名\n        ")])],2)],1)],1),e("el-divider",{attrs:{direction:"vertical",dashed:""}}),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{data:t.levelLists,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.id))])]}}])}),e("el-table-column",{attrs:{label:"等级名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.level_name))])]}}])}),e("el-table-column",{attrs:{label:"任务名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.name))])]}}])}),e("el-table-column",{attrs:{label:"是否显示","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.is_show,size:"large","active-text":"显示","inactive-text":"隐藏"},on:{change:function(e){return t.onchangeIsShow(a.row)}},model:{value:a.row.is_show,callback:function(e){t.$set(a.row,"is_show",e)},expression:"scope.row.is_show"}})]}}])}),e("el-table-column",{attrs:{label:"务必达成","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.is_must,"true-value":1,"false-value":0,size:"large","active-text":"全部","inactive-text":"其一"},on:{change:function(e){return t.onchangeIsMust(a.row)}},model:{value:a.row.is_must,callback:function(e){t.$set(a.row,"is_must",e)},expression:"scope.row.is_must"}})]}}])}),e("el-table-column",{attrs:{label:"任务说明","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.illustrate))])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.edit(a.row)}}},[t._v("编辑 | ")]),e("a",{on:{click:function(e){return t.del(a.row,"删除等级任务",t.index)}}},[t._v(" 删除")])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.levelFrom.page,limit:t.levelFrom.limit},on:{"update:page":function(e){return t.$set(t.levelFrom,"page",e)},"update:limit":function(e){return t.$set(t.levelFrom,"limit",e)},pagination:t.getList}}):t._e()],1),e("edit-from",{ref:"edits",attrs:{FromData:t.FromData,titleType:t.titleType},on:{submitFail:t.submitFail}})],1)}),[],!1,null,"548132bf",null).exports,n={name:"orderMark",data:function(){return{formValidate:{remark:""},modals:!1,ruleValidate:{remark:[{required:!0,message:"请输入备注信息",trigger:"blur"}]}}},props:{remark:{default:"",type:String}},methods:{cancel:function(t){this.modals=!1,this.$refs[t].resetFields()},putRemark:function(t){var e=this;this.$refs[t].validate((function(t){t?e.$emit("submitFail",e.formValidate.remark):e.$message.warning("请填写备注信息")}))}}},n={name:"user_level",components:{remark:Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"order_box",attrs:{visible:t.modals,title:"备注",width:"470px","show-close":!0},on:{"update:visible":function(e){t.modals=e}}},[e("el-form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":"85px"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[e("el-input",{staticStyle:{width:"100%"},attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"请输入备注信息"},model:{value:t.formValidate.remark,callback:function(e){t.$set(t.formValidate,"remark",e)},expression:"formValidate.remark"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.putRemark("formValidate")}}},[t._v("提交")]),e("el-button",{on:{click:function(e){return t.cancel("formValidate")}}},[t._v("取消")])],1)],1)}),[],!1,null,"14eb4943",null).exports},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},id:"",loading:!1,levelFrom:{status:"",keywords:"",page:1,limit:15},levelLists:[],total:0}},created:function(){this.getList()},computed:Object(i.a)(Object(i.a)({},Object(r.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(i.a)(Object(i.a)({},Object(r.c)("userLevel",["getlevelId"])),{},{remark:function(t){this.id=t.id,this.$refs.remark.formValidate.remark=t.remark,this.$refs.remark.modals=!0},agree:function(t){var e=this;this.delfromData={title:"注销用户",url:"/user/cancel/agree/".concat(t.id),method:"get"},this.$modalSure(this.delfromData).then((function(t){e.$message.success(t.msg),e.getList()})).catch((function(t){e.$message.error(t.msg)}))},refuse:function(t){var e=this;this.delfromData={title:"拒绝注销用户",info:"您确认拒绝注销此用户吗?",url:"/user/cancel/refuse/".concat(t.id),method:"get"},this.$modalSure(this.delfromData).then((function(t){e.$message.success(t.msg),e.getList()})).catch((function(t){e.$message.error(t.msg)}))},submitFail:function(t){var e=this;t={id:this.id,mark:t};Object(o.K)(t).then((function(t){e.$refs.remark.modals=!1,e.$message.success(t.msg),e.getList()})).catch((function(t){e.$refs.remark.modals=!1,e.$message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,this.levelFrom.status=this.levelFrom.status||"",Object(o.J)(this.levelFrom).then(function(){var e=Object(s.a)(Object(l.a)().mark((function e(a){var s;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.data,t.levelLists=s.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))},userSearchs:function(){this.levelFrom.page=1,this.getList()}})},a("d0ee"),i=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("el-form",{ref:"levelFrom",attrs:{model:t.levelFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-row",{attrs:{gutter:24}},[e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"状态：","label-for":"status1"}},[e("el-radio-group",{attrs:{type:"button"},on:{input:function(e){return t.userSearchs(t.levelFrom.status)}},model:{value:t.levelFrom.status,callback:function(e){t.$set(t.levelFrom,"status",e)},expression:"levelFrom.status"}},[e("el-radio-button",{attrs:{label:""}},[t._v("全部")]),e("el-radio-button",{attrs:{label:"0"}},[t._v("待审核")]),e("el-radio-button",{attrs:{label:"1"}},[t._v("通过")]),e("el-radio-button",{attrs:{label:"2"}},[t._v("拒绝")])],1)],1)],1),e("el-col",t._b({},"el-col",t.grid,!1),[e("el-form-item",{attrs:{label:"用户搜索：","label-for":"title"}},[e("el-input",{attrs:{search:"","enter-button":"",placeholder:"请输入用户昵称/ID/手机号"},on:{"on-search":t.userSearchs},model:{value:t.levelFrom.keywords,callback:function(e){t.$set(t.levelFrom,"keywords",e)},expression:"levelFrom.keywords"}})],1)],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:t.levelLists,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.id))])]}}])}),e("el-table-column",{attrs:{label:"昵称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.name))])]}}])}),e("el-table-column",{attrs:{label:"手机号","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.phone))])]}}])}),e("el-table-column",{attrs:{label:"状态","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.status))])]}}])}),e("el-table-column",{attrs:{label:"申请时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.add_time))])]}}])}),e("el-table-column",{attrs:{label:"审核时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.up_time))])]}}])}),e("el-table-column",{attrs:{label:"备注","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.remark))])]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.agree(a.row)}}},[t._v("同意")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.refuse(a.row)}}},[t._v("拒绝")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.remark(a.row)}}},[t._v("备注")])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.levelFrom.page,limit:t.levelFrom.limit},on:{"update:page":function(e){return t.$set(t.levelFrom,"page",e)},"update:limit":function(e){return t.$set(t.levelFrom,"limit",e)},pagination:t.getList}}):t._e()],1)],1),e("remark",{ref:"remark",on:{submitFail:t.submitFail}})],1)}),[],!1,null,"539280fa",null);e.default=i.exports}}]);