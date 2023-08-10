(self.webpackChunk=self.webpackChunk||[]).push([[4353],{83016:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={props:["id","small"]}},79767:(t,e,r)=>{"use strict";r.d(e,{s:()=>n,x:()=>o});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"admin.chat.rooms.edit",params:{id:t.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:t.small}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("Edit")))])],1)],1),t._v(" "),r("v-list-item",{attrs:{to:{name:"admin.chat.rooms.delete",params:{id:t.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:t.small}},[t._v("mdi-delete")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)},o=[]},83647:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>C});var n=r(87757),o=r.n(n),a=r(50175),s=r.n(a),i=r(36395);function l(t,e,r,n,o,a,s){try{var i=t[a](s),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(n,o)}const c={components:{ChatRoomMenu:r(5406).Z},middleware:["auth","verified","2fa_passed","admin"],mixins:[i.Z],props:["id"],metaInfo:function(){return{title:this.$t("Create chat room",[this.id])}},data:function(){return{form:new(s())({name:null})}},methods:{create:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/admin/chat/rooms");case 2:e.$store.dispatch("message/success",{text:e.$t("Chat room successfully created.")}),e.$router.push({name:"admin.chat.rooms.index"});case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){l(a,n,o,s,i,"next",t)}function i(t){l(a,n,o,s,i,"throw",t)}s(void 0)}))})()}}};var m=r(51900),u=r(43453),v=r.n(u),d=r(4330),f=r(43776),p=r(5255),_=r(17024),h=r(66530),b=r(83240),x=r(6571),V=r(57894),Z=r(22515),y=r(54933),$=r(40961),w=r(73845),k=(0,m.Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",[r("v-toolbar",[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Create chat room"))+"\n          ")]),t._v(" "),r("v-spacer"),t._v(" "),r("chat-room-menu",{attrs:{id:t.id}})],1),t._v(" "),r("v-card-text",[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.create(e)}},model:{value:t.formIsValid,callback:function(e){t.formIsValid=e},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:t.$t("Name"),disabled:t.form.busy,rules:[t.validationRequired],error:t.form.errors.has("name"),"error-messages":t.form.errors.get("name"),outlined:""},on:{keydown:function(e){return t.clearFormErrors(e,"name")}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.formIsValid||t.form.busy,loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("Save"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const C=k.exports;v()(k,{VBtn:d.Z,VCard:f.Z,VCardText:p.ZB,VCol:_.Z,VContainer:h.Z,VForm:b.Z,VIcon:x.Z,VRow:V.Z,VSpacer:Z.Z,VTextField:y.Z,VToolbar:$.Z,VToolbarTitle:w.qW})}}]);
//# sourceMappingURL=admin-chat-rooms-create.js.map