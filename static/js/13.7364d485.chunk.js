(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[13],{282:function(e,a,t){"use strict";var n=t(75);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t(1)),r=(0,n(t(76)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("g",{fill:"none"},o.default.createElement("path",{d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".87"})),o.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})),"LockOutlined");a.default=r},519:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(111),o=t.n(n),r=t(112),c=t(87),l=t(1),i=t.n(l),s=t(525),m=t(522),u=t(523),p=t(569),d=t(521),g=t(524),h=t(71),f=t(191),v=t(282),w=t.n(v),E=t(520),k=t(281),y=t(24),b=t(132),_=t.n(b),C=t(19),S=t(95),I=t(150),N=t.n(I),j=t(10);function x(){return i.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",i.a.createElement(d.a,{color:"inherit",href:"https://material-ui.com/"},"GNT Servicios generales SA")," ",(new Date).getFullYear(),".")}var z=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://i.imgur.com/SltHx51.png)",backgroundRepeat:"no-repeat",backgroundColor:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),G=Object(y.a)((function(e){return{root:{color:e.palette.getContrastText(C.a[700]),backgroundColor:C.a[700],"&:hover":{backgroundColor:C.a[600]}}}}))(m.a);function O(){var e=i.a.useState(!1),a=Object(c.a)(e,2),t=a[0],n=a[1],l=z(),d=function(){var e=Object(r.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=".concat(a),{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("perfilGoogle",JSON.stringify(e)),n(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return!0===t?i.a.createElement(j.a,{to:"/inicio"}):localStorage.getItem("tokenGoogle")?i.a.createElement(j.a,{to:"/inicio"}):i.a.createElement(f.a,{container:!0,component:"main",className:l.root},i.a.createElement(u.a,null),i.a.createElement(f.a,{item:!0,xs:!1,sm:4,md:7,className:l.image}),i.a.createElement(f.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0},i.a.createElement("div",{className:l.paper},i.a.createElement(s.a,{className:l.avatar},i.a.createElement(w.a,null)),i.a.createElement(E.a,{component:"h1",variant:"h5"},"GNT - CRM"),i.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Nickname",name:"nickname",autoComplete:"nickname",autoFocus:!0}),i.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),i.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",className:l.submit},"Ingresar"),i.a.createElement(G,{fullWidth:!0,onClick:function(){return function(){var e="https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly";N.a.load("auth2",(function(){N.a.auth2.authorize({apiKey:"".concat(S.a.api_key),client_id:"".concat(S.a.client_id),scope:e,cookie_policy:"none"},(function(e){localStorage.setItem("tokenGoogle",JSON.stringify(e.access_token)),d(e.access_token)}))}))}()},startIcon:i.a.createElement(_.a,null),variant:"contained"},"Ingresar con Google"),i.a.createElement(h.a,{mt:5},i.a.createElement(x,null)))))}},95:function(e,a,t){"use strict";a.a={url:"http://172.19.39.245:8080/nt/",urlGmail:"https://www.googleapis.com/gmail/v1/users/me/",urlCalendar:"https://www.googleapis.com/calendar/v3/calendars/primary/events",client_id:"128451255760-6lug3bde25hnd9btogfr7t3ff135ddvq.apps.googleusercontent.com",api_key:"AIzaSyC0_rYfBmJYrGPbqlVmcB_MjH_Ioem3tpE",primary_color:"teal",secondary_color:"orange",type:"light"}}}]);
//# sourceMappingURL=13.7364d485.chunk.js.map