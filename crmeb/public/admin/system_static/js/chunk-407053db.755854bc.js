(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-407053db"],{"71c7":function(e,r,t){"use strict";t("bcd1")},"7bcf":function(e,r,t){"use strict";t.r(r),t("d81d"),t("99af"),t("a630"),t("3ca3"),t("d3b7"),t("6062"),t("ddb0");var i={name:"widgetImg",components:{uploadFrom:t("b0e7").a},data:function(){return{isChoice:"单选",isChoiceD:"多选",isIframe:!0,gridPic:{xl:4,lg:4,md:8,sm:12,xs:12},gridBtn:{xl:4,lg:4,md:4,sm:8,xs:8}}},mounted:function(){},methods:{getPicD:function(e){var r=window.form_create_helper.get(this.$route.query.fodder)||[];e=e.map((function(e){return e.att_dir})),r=r.concat(e),e=Array.from(new Set(r));form_create_helper.set(this.$route.query.fodder,e),form_create_helper.close(this.$route.query.fodder)},getPic:function(e){form_create_helper.set(this.$route.query.fodder,e.satt_dir),form_create_helper.close(this.$route.query.fodder)}}};t("71c7"),t=t("2877"),t=Object(t.a)(i,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"box"},["dialog"===this.$route.query.fodder||"many"===this.$route.query.type?r("upload-from",{attrs:{isChoice:e.isChoiceD,gridPic:e.gridPic,gridBtn:e.gridBtn,isIframe:e.isIframe},on:{getPicD:e.getPicD}}):r("upload-from",{attrs:{isChoice:e.isChoice,isIframe:e.isIframe,gridPic:e.gridPic,gridBtn:e.gridBtn},on:{getPic:e.getPic}})],1)}),[],!1,null,"203f8ae6",null);r.default=t.exports},bcd1:function(e,r,t){}}]);