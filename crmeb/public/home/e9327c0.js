(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{620:function(t,o,e){"use strict";e.r(o);var n=e(154),c=e(153),r={components:{ChatRoom:n.a},mixins:[c.a],auth:!1,fetch:function(t){var o=t.store;o.commit("isHeader",!1),o.commit("isFooter",!1)},head:function(){return{title:"客服聊天-"+this.$store.state.titleCon}},created:function(){this.chatOptions.show=!0,this.chatOptions.popup=!1}},h=e(16),component=Object(h.a)(r,(function(){var t=this;return(0,t._self._c)("chat-room",{directives:[{name:"show",rawName:"v-show",value:t.chatOptions.show,expression:"chatOptions.show"}],attrs:{"chat-options":t.chatOptions},on:{"chat-close":t.chatClose,"socket-open":t.socketOpen,"socket-error":t.socketError}})}),[],!1,null,null,null);o.default=component.exports}}]);