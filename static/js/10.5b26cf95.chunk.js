(this["webpackJsonpcrm-app"]=this["webpackJsonpcrm-app"]||[]).push([[10],{359:function(e,a){},361:function(e,a){},374:function(e,a){},376:function(e,a){},423:function(e,a){},424:function(e,a){},558:function(e,a,t){"use strict";t.r(a);var n=t(109),l=t.n(n),r=t(110),o=t(94),c=t(482),i=t(1),s=t.n(i),u=t(515),m=t(516),d=t(273),p=t(79),f=t(303),b=t(546),E=t(547),g=t(304),h=t(548),y=t(517),O=t(512),v=t(274),j=t(525),C=t(313),S=t.n(C),I=t(533),T=t(552),w=t(549),x=t(71),k=t(95);var N=function(e,a,t,n){var o="";localStorage.getItem("tokenGoogle")&&(o=JSON.parse(localStorage.getItem("tokenGoogle")));var c={},i="".concat(k.a.urlGmail).concat(a).concat(n);return"POST"===e&&(c={method:e,body:JSON.stringify({raw:t}),headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o)}}),"GET"===e&&(c={method:e,headers:{Authorization:"Bearer ".concat(o)}}),new Promise(function(){var e=Object(r.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i,c).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){t(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}())},P=t(559),A=t(535),G=t(249),R=t.n(G),W=t(147),_=t.n(W),D=t(307),M=t(311),z=t(310),B=t(308),q=t(309),F=t(250),L=t.n(F),Y=t(545),H=t(306),J=t(524),U=t(527),X=t(528),K=t(543),Q=t(334),Z=t(544),V=t(560),$=t(526),ee=t(469),ae=t.n(ee),te=t(470),ne=t.n(te),le=t(190),re=t.n(le),oe=t(556),ce=t(312),ie=t(561),se=t(125),ue=t(557),me=t(514),de=t(12),pe=t(68),fe=t(302);function be(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var Ee=Object(d.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:fe.a[500],"&:hover":{backgroundColor:fe.a[700]}},fabProgress:{color:fe.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:fe.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function ge(e){var a,n=Ee(),l=s.a.useState({}),r=Object(o.a)(l,2),c=r[0],i=r[1],m=s.a.useState(!1),d=Object(o.a)(m,2),p=d[0],f=d[1],b=s.a.useState(!1),E=Object(o.a)(b,2),g=E[0],h=E[1],y=s.a.useRef(),O=e.dialogProps,j=Object(de.a)(Object(se.a)({},n.buttonSuccess,g)),C=function(e){i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?be(t,!0).forEach((function(a){Object(se.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},c,Object(se.a)({},e.target.name,e.target.value)))};return s.a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement(J.a,Object.assign({fullWidth:!0,maxWidth:"sm"},O,{open:e.abrir,onClose:e.cerrar}),s.a.createElement(U.a,null,"Enviar mensaje"),s.a.createElement(X.a,null,s.a.createElement(ue.a,{xsDown:!0},s.a.createElement(v.a,{container:!0,spacing:1},s.a.createElement(v.a,{item:!0,xs:12},s.a.createElement(v.a,{container:!0,direction:"column",spacing:2},s.a.createElement(v.a,{item:!0},s.a.createElement(ie.a,{autoComplete:"to",name:"To",fullWidth:!0,label:"Destinatario",placeholder:"Correo electr\xf3nico",required:!0,onChange:C.bind(),type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0},s.a.createElement(ie.a,{autoComplete:"motivo",fullWidth:!0,label:"Subject",name:"Subject",placeholder:"Motivo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0},s.a.createElement(ie.a,{autoComplete:"mensaje",fullWidth:!0,multiline:!0,rows:5,label:"Mensaje",name:"Snippet",placeholder:"Cuerpo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})))))),s.a.createElement(ue.a,{smUp:!0},s.a.createElement(v.a,{container:!0,direction:"column",spacing:2},s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ie.a,{autoComplete:"to",name:"To",fullWidth:!0,label:"Destinatario",placeholder:"Correo electr\xf3nico",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ie.a,{autoComplete:"current-password",fullWidth:!0,label:"Subject",name:"Subject",placeholder:"Motivo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"})),s.a.createElement(v.a,{item:!0,xs:!0},s.a.createElement(ie.a,{autoComplete:"mensaje",fullWidth:!0,multiline:!0,rows:5,label:"Mensaje",name:"Snippet",placeholder:"Cuerpo del mensaje",onChange:C.bind(),required:!0,type:"text",variant:"outlined"}))))),s.a.createElement(K.a,null,s.a.createElement(me.a,{color:"secondary",onClick:e.cerrar},"Cerrar"),s.a.createElement(me.a,{onClick:function(){new(t(335))("text/plain").setContent(c.Snippet).addHeader("From","").addHeader("To",c.To).addHeader("Subject",c.Subject).build((function(e,t){(a=btoa(t.toString()))&&(h(!1),f(!0),y.current=setTimeout((function(){h(!0),f(!1),N("POST","messages/send",a,"?alt=json")}),2e3))}))},color:"primary",className:j,disabled:p,variant:"contained"},p&&s.a.createElement(pe.a,{size:24,className:n.buttonProgress}),"Enviar"))))}function he(e){var a=e.children,t=e.value,n=e.index,l=Object(c.a)(e,["children","value","index"]);return s.a.createElement(O.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),s.a.createElement(x.a,null,a))}function ye(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Oe=Object(d.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(10)},card:{width:400,margin:e.spacing(5)},media:{height:100,paddingTop:"56.25%"},"pesta\xf1a":{width:"100%"},typography:{padding:e.spacing(2)},close:{padding:e.spacing(.5)},table:{minWidth:650},iframe:{width:"100%",border:0,minHeight:"80%",height:"600px",display:"flex"},speedDial:{position:"fixed",bottom:e.spacing(7),right:e.spacing(2)},back:{transform:"translateZ(0px)",position:"fixed",zIndex:100},modal:{display:"flex",alignItems:"center",justifyContent:"center"},estiloModal:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ve=[{name:"Buscar"},{name:"Nuevo"}];a.default=function(){var e,a,n,c,i,d=s.a.useState(0),C=Object(o.a)(d,2),x=C[0],G=C[1],W=s.a.useState({}),F=Object(o.a)(W,2),ee=F[0],te=F[1],le=Oe(),se=Object(p.a)(),ue=s.a.useState({}),me=Object(o.a)(ue,2),de=me[0],pe=me[1],fe=s.a.useState([]),be=Object(o.a)(fe,2),Ee=be[0],je=be[1],Ce=s.a.useState({}),Se=Object(o.a)(Ce,2),Ie=Se[0],Te=Se[1],we=s.a.useState([]),xe=Object(o.a)(we,2),ke=xe[0],Ne=xe[1],Pe=s.a.useState({}),Ae=Object(o.a)(Pe,2),Ge=Ae[0],Re=Ae[1],We=s.a.useState([]),_e=Object(o.a)(We,2),De=_e[0],Me=_e[1],ze=s.a.useState(!1),Be=Object(o.a)(ze,2),qe=Be[0],Fe=Be[1],Le=s.a.useState(""),Ye=Object(o.a)(Le,2),He=Ye[0],Je=Ye[1],Ue=s.a.useState("INBOX"),Xe=Object(o.a)(Ue,2),Ke=Xe[0],Qe=Xe[1],Ze=s.a.useState(!1),Ve=Object(o.a)(Ze,2),$e=Ve[0],ea=Ve[1],aa=s.a.useState(""),ta=Object(o.a)(aa,2),na=ta[0],la=ta[1],ra=s.a.useState(""),oa=Object(o.a)(ra,2),ca=oa[0],ia=oa[1],sa=s.a.useState(""),ua=Object(o.a)(sa,2),ma=ua[0],da=ua[1],pa=s.a.useState(""),fa=Object(o.a)(pa,2),ba=fa[0],Ea=fa[1],ga=s.a.useState(""),ha=Object(o.a)(ga,2),ya=ha[0],Oa=ha[1],va=s.a.useState({}),ja=Object(o.a)(va,2),Ca=ja[0],Sa=ja[1],Ia=s.a.useState("google"),Ta=Object(o.a)(Ia,2),wa=Ta[0],xa=Ta[1],ka=s.a.useState(!1),Na=Object(o.a)(ka,2),Pa=Na[0],Aa=Na[1],Ga=s.a.useState(!1),Ra=Object(o.a)(Ga,2),Wa=Ra[0],_a=Ra[1],Da=s.a.useState(!1),Ma=Object(o.a)(Da,2),za=Ma[0],Ba=Ma[1],qa=[],Fa=[],La=[],Ya="https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly",Ha=JSON.parse(localStorage.getItem("perfilGoogle")),Ja=function(){Fe(!1)},Ua=function(){N("GET","messages","","?q=".concat(wa,"&labelIds=INBOX")).then((function(e){if(pe(e),e.hasOwnProperty("error"))_.a.load("auth2",Qa);else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(wa,"&labelIds=INBOX")).then((function(e){qa.push(e)}));console.log(de),Fe(!0),je(qa),_a(!1)}))},Xa=function(){N("GET","messages","","?q=".concat(wa,"&labelIds=SENT")).then((function(e){if(Te(e),e.hasOwnProperty("error"));else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(wa,"&labelIds=SENT")).then((function(e){Fa.push(e)}));console.log(Ie),Ne(Fa)}))},Ka=function(){N("GET","messages","","?q=".concat(wa,"&labelIds=CHAT")).then((function(e){if(Re(e),e.hasOwnProperty("error"));else if(e.resultSizeEstimate>0)for(var a=0;a<e.messages.length;a++)N("GET","messages/","","".concat(e.messages[a].id,"?q=").concat(wa,"&labelIds=CHAT")).then((function(e){La.push(e)}));console.log(Ge),Me(La)}))};function Qa(){_.a.auth2.authorize({client_id:"".concat(k.a.client_id),scope:Ya},(function(e){localStorage.setItem("tokenGoogle",JSON.stringify(e.access_token)),je([]),Ne([]),Me([]),Ua(),Xa(),Ka(),Va(),Za(e.access_token)}))}var Za=function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=".concat(a),{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("perfilGoogle",JSON.stringify(e))}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Va=function(){N("GET","profile","","").then((function(e){te(e)}))};s.a.useEffect(Va,[]),s.a.useEffect(Ua,[]),s.a.useEffect(Xa,[]),s.a.useEffect(Ka,[]);var $a=function(t){[t.headers].forEach((function(t){for(var l=0;l<t.length;l++)"To"===t[l].name?a=t[l].value:"From"===t[l].name?n=t[l].value:"Date"===t[l].name?c=t[l].value:"Subject"===t[l].name&&(e=t[l].value)}))},et=function(){var e=Object(r.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("tokenGoogle")),e.next=3,fetch("https://www.googleapis.com/gmail/v1/users/me/messages/".concat(a),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(){Ua(),Xa(),Ka()}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),at=function(e){xa(wa),Je(e.snippet),ea(!0),"CHAT"===Ke?(la(e.snippet),lt(e.payload)):(tt(e.payload),rt(e.payload),ot(e.payload,e.id))},tt=function(e){var a="";a=(a=e.hasOwnProperty("parts")?"undefined"===typeof e.parts?e.body.data:nt(e.parts):e.body.data).replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,""),la(decodeURIComponent(escape(window.atob(a))))},nt=function e(a){for(var t=0;t<=a.length;t++){if("undefined"!==typeof a[t].parts)return e(a[t].parts);if("text/html"===a[t].mimeType)return a[t].body.data}return""},lt=function(e){[e.headers].forEach((function(e){for(var a=0;a<e.length;a++)i=e[a].value}))},rt=function(e){[e.headers].forEach((function(e){for(var a=0;a<e.length;a++)"Subject"===e[a].name?ia(e[a].value):"From"===e[a].name&&(i=e[a].value)}))},ot=function(e,a){var t;e.hasOwnProperty("parts")&&([e.parts].forEach((function(e){for(var a=0;a<e.length;a++)"undefined"!==typeof e[a].filename&&(t=e[a].body.attachmentId,da(e[a].mimeType),Ea(e[a].filename),Oa(ba.split(".")[1]))})),ct(a,t))},ct=function(e,a){N("GET","messages/","","".concat(e,"/attachments/").concat(a)).then((function(e){Sa(e)}))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement(ge,{abrir:za,cerrar:function(){Ba(!1),je([]),Ne([]),Me([]),Ua(),Ka(),Xa()}.bind()}),s.a.createElement(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:qe,autoHideDuration:3e3,onClose:Ja,style:{opacity:"0.8"},ContentProps:{"aria-describedby":"message-id"},message:s.a.createElement(O.a,{id:"message-id",variant:"button"},"Cargando mensajes... ",s.a.createElement(H.a,{color:"primary",style:{width:"100%",marginBottom:0}})),action:[s.a.createElement(A.a,{key:"close","aria-label":"close",color:"inherit",className:le.close,onClick:Ja},s.a.createElement(R.a,null))]}),s.a.createElement(m.a,{elevation:4,className:le.root},s.a.createElement(oe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:le.modal,open:Wa,onClose:function(){_a(!1)},closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:500}},s.a.createElement(ce.a,{in:Wa,timeout:500},s.a.createElement("div",{className:le.estiloModal},s.a.createElement(O.a,{variant:"h6"},"Buscar"),s.a.createElement(ie.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"\xbfQu\xe9 deseas buscar?",autoComplete:"correo",autoFocus:!0,onChange:function(e){xa(e.target.value)}.bind(),onKeyDown:function(e){13===e.keyCode&&(je([]),Ne([]),Me([]),Ua(),Ka(),Xa())}.bind(),value:wa})))),console.log(He),console.log(ya),s.a.createElement($.a,{open:Pa,className:le.back}),s.a.createElement(Z.a,{ariaLabel:"SpeedDial tooltip example",className:le.speedDial,icon:s.a.createElement(re.a,null),onClose:function(){Aa(!1)},onOpen:function(){Aa(!0)},open:Pa},ve.map((function(e){return s.a.createElement(V.a,{key:e.name,icon:"Nuevo"===e.name?s.a.createElement(ae.a,null):"Buscar"===e.name?s.a.createElement(ne.a,null):"",tooltipTitle:e.name,onClick:"Nuevo"===e.name?function(){return Ba(!0)}:"Buscar"===e.name?function(){return _a(!0)}:""})}))),s.a.createElement(J.a,{open:$e,onClose:function(){return ea(!1)}},s.a.createElement(U.a,{disableTypography:!0},s.a.createElement(O.a,{variant:"h6"},"CHAT"===Ke?i:ca)),s.a.createElement(X.a,null,s.a.createElement("iframe",{className:le.iframe,srcDoc:na,title:ca})),s.a.createElement(K.a,null,s.a.createElement(O.a,{variant:"button",style:{cursor:"pointer"},title:"Descargar Archivo",onClick:function(){return function(){var e=t(467),a=Ca.data;if("undefined"!==typeof a){var n=e(a=a.replace(/ /g,"+").replace(/_/g,"/").replace(/-/g,"+"),ma);Object(Q.a)(n,ba)}}()}},ba))),s.a.createElement(v.a,{container:!0,alignItems:"center",justify:"center"},s.a.createElement(f.a,{className:le.card},s.a.createElement(b.a,{avatar:s.a.createElement(y.a,{alt:"...",src:Ha.picture}),title:ee.emailAddress}),s.a.createElement(E.a,{className:le.media,image:"https://i.imgur.com/RGf2v43.jpg"}),s.a.createElement(g.a,null,s.a.createElement(O.a,{variant:"button",color:"textSecondary",component:"p"},"Mensajes totales: ".concat(ee.messagesTotal))),s.a.createElement(h.a,{disableSpacing:!0}))),s.a.createElement(j.a,{in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1e3},s.a.createElement("div",{className:le.pesta\u00f1a},s.a.createElement(I.a,{position:"static",color:"primary"},s.a.createElement(T.a,{value:x,onChange:function(e,a){G(a)},indicatorColor:"secondary",variant:"fullWidth","aria-label":"full width tabs example"},s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"caption"},"Inbox")},ye(0),{onClick:function(){return Qe("INBOX")}})),s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"caption"},"Enviados")},ye(1),{onClick:function(){return Qe("SENT")}})),s.a.createElement(w.a,Object.assign({label:s.a.createElement(O.a,{variant:"caption"},"Chat")},ye(2),{onClick:function(){return Qe("CHAT")}})))),s.a.createElement(S.a,{axis:"rtl"===se.direction?"x-reverse":"x",index:x,onChangeIndex:function(e){G(e)}},s.a.createElement(he,{value:x,index:0,dir:se.direction},s.a.createElement(D.a,{className:le.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(B.a,null,s.a.createElement(q.a,null,s.a.createElement(z.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Enviado por:"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(z.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,Ee.length?Ee.map((function(a,t){return s.a.createElement(q.a,{key:t},s.a.createElement(z.a,{onClick:function(){return at(a)},style:{cursor:"pointer"}},"IMPORTANT"===a.labelIds[0]?a.labelIds[2]:"Label_1"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PROMOTIONS"===a.labelIds[0]?a.labelIds[2]:"CATEGORY_UPDATES"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_FORUMS"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PERSONAL"===a.labelIds[0]?a.labelIds[1]:a.labelIds[0]),s.a.createElement(z.a,{align:"left",onLoad:$a(a.payload),onClick:function(){return at(a)},style:{cursor:"pointer"}},n),s.a.createElement(z.a,{align:"left",onClick:function(){return at(a)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(a.snippet.substr(0,20),"...")),s.a.createElement(z.a,{align:"left",onClick:function(){return at(a)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(z.a,{align:"right"},s.a.createElement(Y.a,{size:"small",color:"secondary","aria-label":"eliminar",onClick:function(){return et(a.id)}},s.a.createElement(L.a,null))))})):s.a.createElement(q.a,null,s.a.createElement(z.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))),s.a.createElement(he,{value:x,index:1,dir:se.direction},s.a.createElement(D.a,{className:le.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(B.a,null,s.a.createElement(q.a,null,s.a.createElement(z.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Enviado a:"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(z.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,ke.length?ke.map((function(t,n){return s.a.createElement(q.a,{key:n},s.a.createElement(z.a,{onClick:function(){return at(t)},style:{cursor:"pointer"}},"IMPORTANT"===t.labelIds[0]?t.labelIds[2]:"Label_1"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_PROMOTIONS"===t.labelIds[0]?t.labelIds[2]:"CATEGORY_UPDATES"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_FORUMS"===t.labelIds[0]?t.labelIds[1]:"CATEGORY_PERSONAL"===t.labelIds[0]?t.labelIds[1]:t.labelIds[0]),s.a.createElement(z.a,{align:"left",onLoad:$a(t.payload),onClick:function(){return at(t)},style:{cursor:"pointer"}},a),s.a.createElement(z.a,{align:"left",onClick:function(){return at(t)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(t.snippet.substr(0,20),"...")),s.a.createElement(z.a,{align:"left",onClick:function(){return at(t)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(z.a,{align:"right"},s.a.createElement(Y.a,{size:"small",color:"secondary","aria-label":"eliminar",onClick:function(){return et(t.id)}},s.a.createElement(L.a,null))))})):s.a.createElement(q.a,null,s.a.createElement(z.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))),s.a.createElement(he,{value:x,index:2,dir:se.direction},s.a.createElement(D.a,{className:le.table,"aria-label":"simple table","aria-labelledby":"tableTitle"},s.a.createElement(B.a,null,s.a.createElement(q.a,null,s.a.createElement(z.a,{style:{maxWidth:100}},"Origen"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Enviado por:"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Subject"),s.a.createElement(z.a,{align:"left",style:{maxWidth:100}},"Fecha"),s.a.createElement(z.a,{align:"right"},"Eliminar"))),s.a.createElement(M.a,null,De.length?De.map((function(a,t){return s.a.createElement(q.a,{key:t},s.a.createElement(z.a,{onClick:function(){return at(a)},style:{cursor:"pointer"}},"IMPORTANT"===a.labelIds[0]?a.labelIds[2]:"Label_1"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PROMOTIONS"===a.labelIds[0]?a.labelIds[2]:"CATEGORY_UPDATES"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_FORUMS"===a.labelIds[0]?a.labelIds[1]:"CATEGORY_PERSONAL"===a.labelIds[0]?a.labelIds[1]:a.labelIds[0]),s.a.createElement(z.a,{align:"left",onLoad:$a(a.payload),onClick:function(){return at(a)},style:{cursor:"pointer"}},n),s.a.createElement(z.a,{align:"left",onClick:function(){return at(a)},style:{cursor:"pointer"}},s.a.createElement("strong",null,e)," - ".concat(a.snippet.substr(0,20),"...")),s.a.createElement(z.a,{align:"left",onClick:function(){return at(a)},style:{cursor:"pointer"}},c.substr(5,11)),s.a.createElement(z.a,{align:"right"},s.a.createElement(Y.a,{size:"small",color:"secondary","aria-label":"eliminar",onClick:function(){return et(a.id)}},s.a.createElement(L.a,null))))})):s.a.createElement(q.a,null,s.a.createElement(z.a,{align:"left"},s.a.createElement(O.a,{variant:"button"},"No hay nada para mostrar")))))))))))}}}]);
//# sourceMappingURL=10.5b26cf95.chunk.js.map