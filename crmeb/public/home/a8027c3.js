(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{483:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("2b1b0ab0",content,!0,{sourceMap:!1})},581:function(t,e,n){t.exports=n.p+"img/add.02a167a.png"},582:function(t,e,n){"use strict";n(483)},583:function(t,e,n){var o=n(2)((function(i){return i[1]}));o.push([t.i,".address-wrapper .address-content li[data-v-3e670b06]{border:1px solid #eaeaea;float:left;margin-right:30px;margin-top:30px;min-height:200px;padding:22px 27px;position:relative;width:250px}.address-wrapper .address-content li .moren[data-v-3e670b06]{background:#e93323;color:#fff;height:23px;line-height:23px;position:absolute;right:0;text-align:center;top:0;width:56px}.address-wrapper .address-content li .name[data-v-3e670b06]{color:#282828;font-size:16px}.address-wrapper .address-content li .phone[data-v-3e670b06]{font-size:12px;margin-bottom:4px;margin-top:14px}.address-wrapper .address-content li .text[data-v-3e670b06]{color:#999;font-size:14px;height:75px}.address-wrapper .address-content li .edit-box[data-v-3e670b06]{bottom:12px;color:#e93323;opacity:0;position:absolute;right:14px}.address-wrapper .address-content li .edit-box span[data-v-3e670b06]{cursor:pointer;margin-left:5px}.address-wrapper .address-content li.addbox .box[data-v-3e670b06]{color:#c8c8c8;font-size:14px;left:0;margin-top:-25px;position:absolute;text-align:center;top:50%;width:100%}.address-wrapper .address-content li.addbox .box img[data-v-3e670b06]{display:inline-block;height:27px;width:27px}.address-wrapper .address-content li:hover .edit-box[data-v-3e670b06]{opacity:1;transition:all .6s ease}.input-item[data-v-3e670b06]{margin-bottom:20px}.text-wrapper[data-v-3e670b06]{border:1px solid #dcdfe6;border-radius:4px;box-sizing:border-box;color:#cfcfcf;height:40px;line-height:40px;padding:0 15px;position:relative}.text-wrapper .select-wrapper[data-v-3e670b06]{background:#fff;border:1px solid #e93323;border-radius:4px;left:0;line-height:2;padding:0 15px;position:absolute;top:45px;width:100%;z-index:10}.text-wrapper .select-wrapper .title-box[data-v-3e670b06]{border-bottom:1px solid #efefef;color:#e93323;font-size:14px;height:40px;line-height:40px}.text-wrapper .select-wrapper .title-box span[data-v-3e670b06]{color:#666;margin-right:8px}.text-wrapper .select-wrapper .label-txt[data-v-3e670b06]{color:#666;font-size:14px;margin:8px 0 18px}.text-wrapper .select-wrapper .label-txt span[data-v-3e670b06]{cursor:pointer;margin-right:10px}.text-wrapper .select-wrapper .label-txt span.on[data-v-3e670b06]{color:#e93323}",""]),o.locals={},t.exports=o},640:function(t,e,n){"use strict";n.r(e);n(20);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("img",{attrs:{src:n(581),alt:""}}),t._v(" "),e("p",[t._v("添加新地址")])])}],r=(n(238),n(7),n(155)),c=n.n(r),d=(n(237),n(111)),l=n.n(d),h={name:"addressList",auth:"guest",data:function(){return{list:[],page:1,limit:20,isShowSelect:!1,dialogVisible:!1,editId:0,formData:{name:"",phone:"",con:"",checked:!1},cityData:{pid:0,step:1,list:[],con:"",province:{},city:{},district:{}}}},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"地址管理-"+this.$store.state.titleCon}},created:function(){},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$axios.get("address/list").then((function(e){t.list=e.data}))},addAddress:function(){this.editId=0,this.dialogVisible=!0},handleClose:function(){this.formReset(),this.dialogVisible=!1,this.isShowSelect=!1},bindAdd:function(){this.isShowSelect=!this.isShowSelect,3!=this.cityData.step&&(this.cityData.city={},this.cityData.district={},this.cityData.province={},this.getCityList())},getCityList:function(){var t=this;this.$axios.get("pc/get_city/".concat(this.cityData.pid)).then((function(e){t.cityData.list=e.data}))},bindCity:function(t){3==this.cityData.step?(this.cityData.district=t,this.cityData.pid=t.city_id,this.isShowSelect=!1):(1==this.cityData.step&&(this.cityData.province=t),2==this.cityData.step&&(this.cityData.city=t),this.cityData.pid=t.city_id,this.cityData.step++,this.getCityList())},bindSubmit:function(){var t=this;return this.formData.name?this.formData.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.formData.phone)?this.cityData.province.name?this.formData.con?void this.$axios.post("address/edit",{address:{province:this.cityData.province.name,city:this.cityData.city.name,district:this.cityData.district.name,city_id:this.cityData.city.city_id},is_default:this.formData.checked?1:0,real_name:this.formData.name,phone:this.formData.phone,detail:this.formData.con,id:this.editId}).then((function(e){return t.dialogVisible=!1,t.getList(),t.formReset(),l.a.success("添加成功")})).catch((function(t){return l.a.error(t)})):l.a.error("请填写详细地址"):l.a.error("请选择省市区"):l.a.error("请填写正确的手机号码"):l.a.error("请填写姓名")},bindDefault:function(t){var e=this;this.$axios.post("address/default/set",{id:t.id}).then((function(t){return e.getList(),l.a.success("设置成功")}))},bingDelete:function(t,e){var n=this;c.a.confirm("确定删除该地址吗","提示").then((function(e){n.$axios.post("/address/del",{id:t.id}).then((function(data){return n.getList(),l.a.success("删除成功")}))}))},edit:function(t){this.dialogVisible=!0,this.formData.name=t.real_name,this.formData.phone=t.phone,this.formData.con=t.detail,this.formData.checked=!!t.is_default,this.cityData.province.name=t.province,this.cityData.city.name=t.city,this.cityData.district.name=t.district,this.editId=t.id,this.cityData.city.city_id=t.city_id},formReset:function(){this.formData.name="",this.formData.phone="",this.formData.con="",this.formData.checked=!1,this.cityData.province={},this.cityData.city={},this.cityData.district={},this.cityData.step=1,this.cityData.pid=0}}},v=(n(582),n(16)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"address-wrapper"},[e("div",{staticClass:"user-com-title"},[t._v("\n    地址管理\n  ")]),t._v(" "),e("div",{staticClass:"address-content"},[e("ul",{staticClass:"clearfix"},[t._l(t.list,(function(n,o){return e("li",{attrs:{index:o}},[e("div",{staticClass:"name line1"},[t._v(t._s(n.real_name))]),t._v(" "),e("div",{staticClass:"phone"},[t._v(t._s(n.phone))]),t._v(" "),e("div",{staticClass:"text line4"},[t._v(t._s(n.province)+t._s(n.city)+t._s(n.district)+t._s(n.detail))]),t._v(" "),e("div",{staticClass:"edit-box"},[1!=n.is_default?e("span",{on:{click:function(e){return t.bindDefault(n)}}},[t._v("设为默认地址")]):t._e(),t._v(" "),e("span",{on:{click:function(e){return t.edit(n)}}},[t._v("修改")]),t._v(" "),e("span",{on:{click:function(e){return t.bingDelete(n,o)}}},[t._v("删除")])]),t._v(" "),1==n.is_default?e("div",{staticClass:"moren"},[t._v("默认")]):t._e()])})),t._v(" "),e("li",{staticClass:"addbox",on:{click:t.addAddress}},[t._m(0)])],2)]),t._v(" "),e("el-dialog",{attrs:{title:"添加收货地址",visible:t.dialogVisible,width:"700px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",{staticClass:"form-box"},[e("div",{staticClass:"input-item",staticStyle:{width:"48%",display:"inline-block"}},[e("el-input",{attrs:{maxlength:"25",placeholder:"姓名"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("div",{staticClass:"input-item",staticStyle:{width:"48%",display:"inline-block","margin-left":"3%"}},[e("el-input",{attrs:{placeholder:"手机号"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),t._v(" "),e("div",{staticClass:"input-item text-wrapper"},[t.cityData.province.name?t._e():e("p",{on:{click:t.bindAdd}},[t._v("请选择省/市/区/街道")]),t._v(" "),t.cityData.province.name?e("p",{staticStyle:{color:"#333"},on:{click:t.bindAdd}},[t.cityData.province.name?e("span",[t._v(t._s(t.cityData.province.name)+"/")]):t._e(),t._v(" "),t.cityData.city.name?e("span",[t._v(t._s(t.cityData.city.name)+"/")]):t._e(),t._v(" "),e("span",[t._v(t._s(t.cityData.district.name))])]):t._e(),t._v(" "),t.isShowSelect?e("div",{staticClass:"select-wrapper"},[t.cityData.province.city_id?t._e():e("div",{staticClass:"title-box"},[t._v("选择省/自治区")]),t._v(" "),2==t.cityData.step?e("div",{staticClass:"title-box"},[e("span",[t._v(t._s(t.cityData.province.name))]),t._v("选择区县\n            ")]):t._e(),t._v(" "),3==t.cityData.step?e("div",{staticClass:"title-box"},[e("span",[t._v(t._s(t.cityData.province.name))]),t._v(" "),e("span",[t._v(t._s(t.cityData.city.name))]),t._v("请选择配送区域\n            ")]):t._e(),t._v(" "),e("div",{staticClass:"label-txt"},t._l(t.cityData.list,(function(n,o){return e("span",{key:o,class:{on:t.cityData.pid==n.city_id},on:{click:function(e){return t.bindCity(n)}}},[t._v(t._s(n.name))])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"input-item"},[e("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"详细地址"},model:{value:t.formData.con,callback:function(e){t.$set(t.formData,"con",e)},expression:"formData.con"}})],1),t._v(" "),e("div",{staticClass:"input-item"},[e("el-checkbox",{model:{value:t.formData.checked,callback:function(e){t.$set(t.formData,"checked",e)},expression:"formData.checked"}},[t._v("设为默认")])],1)]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.bindSubmit}},[t._v("确 定")])],1)])],1)}),o,!1,null,"3e670b06",null);e.default=component.exports}}]);