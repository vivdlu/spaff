(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,a,t){e.exports=t(271)},145:function(e,a,t){},188:function(e,a){},190:function(e,a){},225:function(e,a){},226:function(e,a){},270:function(e,a,t){},271:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(30),o=t.n(l),c=(t(144),t(145),t(11)),i=t(12),s=t(14),d=t(13),h=t(15),u=(t(146),t(6)),m=t(137),p=t.n(m),g=t(272),C=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={codes:t.props.codes},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.codes.map(function(a){return r.a.createElement(n.Fragment,{key:a.id},r.a.createElement(g.a,{color:"primary",onClick:e.props.ratingChange.bind(null,a.id)},a.id,r.a.createElement("br",null),r.a.createElement("p",{className:"code-desc"},a.description)))});return r.a.createElement("div",{className:"row"},a)}}]),a}(n.Component),E=t(284),b=t(273),f=t(274),v=t(275),y=t(276),O=t(277),j=t(278),N=t(279),k=t(280),S=t(281),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={modal:!0,playing:!1,src:"",coderName:"",codedCouple:"",codedPartner:""},t.onNameChange=t.onNameChange.bind(Object(u.a)(t)),t.onCoupleChange=t.onCoupleChange.bind(Object(u.a)(t)),t.onPartnerChange=t.onPartnerChange.bind(Object(u.a)(t)),t.onSrcChange=t.onSrcChange.bind(Object(u.a)(t)),t.startCoding=t.startCoding.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"onNameChange",value:function(e){this.setState({coderName:e.target.value})}},{key:"onCoupleChange",value:function(e){this.setState({codedCouple:e.target.value})}},{key:"onPartnerChange",value:function(e){this.setState({codedPartner:e.target.value})}},{key:"onSrcChange",value:function(e){this.setState({src:e.target.value})}},{key:"startCoding",value:function(){this.props.nameChange(this.state.coderName),this.props.coupleChange(this.state.codedCouple),this.props.partnerChange(this.state.codedPartner),this.props.srcChange(this.state.src),this.setState({modal:!this.state.modal,playing:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.a,{isOpen:this.state.modal,className:this.props.className},r.a.createElement(b.a,null,"Begin Coding"),r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(N.a,{for:"coderName"},"Your Name:"),r.a.createElement(k.a,{type:"text",name:"coderName",id:"coderName",onChange:function(a){return e.onNameChange(a)}}))),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(N.a,{for:"coderName"},"Couple:"),r.a.createElement(k.a,{type:"text",name:"codedCouple",id:"codedCouple",onChange:function(a){return e.onCoupleChange(a)}})))),r.a.createElement(y.a,null,r.a.createElement(O.a,{sm:3},r.a.createElement(j.a,null,r.a.createElement("legend",null,"Partner:"),r.a.createElement(j.a,{check:!0},r.a.createElement(N.a,{check:!0},r.a.createElement(k.a,{type:"radio",name:"radio1",value:"left",onChange:function(a){return e.onPartnerChange(a)}})," ","Left")),r.a.createElement(j.a,{check:!0},r.a.createElement(N.a,{check:!0},r.a.createElement(k.a,{type:"radio",name:"radio1",value:"right",onChange:function(a){return e.onPartnerChange(a)}})," ","Right")))),r.a.createElement(O.a,{sm:9},r.a.createElement(j.a,null,r.a.createElement(N.a,{for:"videoUrl"},"Video Link:"),r.a.createElement(k.a,{type:"url",name:"url",id:"videoUrl",onChange:function(a){return e.onSrcChange(a)}})))))),r.a.createElement(S.a,null,r.a.createElement(g.a,{color:"secondary",onClick:this.startCoding},"Start Coding")," ")))}}]),a}(n.Component),w=t(48),x=t.n(w),T=x.a.ExcelFile,R=x.a.ExcelFile.ExcelSheet,F=x.a.ExcelFile.ExcelColumn,V=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=String("SPAFF_"+this.props.coderName+"_"+this.props.codedCouple+"_"+this.props.codedPartner.toUpperCase());return r.a.createElement(T,{filename:e,element:r.a.createElement(g.a,{color:"secondary"},"Download")},r.a.createElement(R,{data:this.props.exportedRatings,name:"Sheet"},r.a.createElement(F,{label:"Time",value:"time"}),r.a.createElement(F,{label:"1",value:"1"}),r.a.createElement(F,{label:"2",value:"2"}),r.a.createElement(F,{label:"3",value:"3"}),r.a.createElement(F,{label:"4",value:"4"}),r.a.createElement(F,{label:"5",value:"5"}),r.a.createElement(F,{label:"6",value:"6"}),r.a.createElement(F,{label:"7",value:"7"}),r.a.createElement(F,{label:"8",value:"8"}),r.a.createElement(F,{label:"9",value:"9"}),r.a.createElement(F,{label:"10",value:"10"})))}}]),a}(r.a.Component),A=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{isOpen:this.props.endModalToggle,className:this.props.className},r.a.createElement(b.a,{toggle:this.toggle},"Coding Completed"),r.a.createElement(f.a,null,this.props.coderName,", you've finished rating the ",this.props.codedPartner," partner of couple ",this.props.codedCouple,". Click to download your data file."),r.a.createElement(S.a,null,r.a.createElement(V,{exportedRatings:this.props.exportedRatings,coderName:this.props.coderName,codedCouple:this.props.codedCouple,codedPartner:this.props.codedPartner}))))}}]),a}(n.Component),D=[{id:1,description:"Contempt, Belligerence, Stone walling"},{id:2,description:"Anger, L/H Dom, Criticism, Defensiveness"},{id:3,description:"Sadness, Disappointment, Despair, Hurt"},{id:4,description:"Victim Defen siveness, Whining"},{id:5,description:"Fear, Tension, Worry, Stress"},{id:6,description:"Neutral"},{id:7,description:"Info Exchange and Responses"},{id:8,description:"Active Interest, Curiosity, Low Val"},{id:9,description:"Affection, Support, Empathy, High Val"},{id:10,description:"Shared Humor, Excitement, Happiness"}],M=[],H=[],B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={currentTime:0,currentCode:6,codes:D,src:"",coderName:"",codedCouple:"",codedPartner:"",playing:!1,endModal:!1},t.Player=r.a.createRef(),t.handleRatingChange=t.handleRatingChange.bind(Object(u.a)(t)),t.handleTimeChange=t.handleTimeChange.bind(Object(u.a)(t)),t.handleNameChange=t.handleNameChange.bind(Object(u.a)(t)),t.handleCoupleChange=t.handleCoupleChange.bind(Object(u.a)(t)),t.handlePartnerChange=t.handlePartnerChange.bind(Object(u.a)(t)),t.handleSrcChange=t.handleSrcChange.bind(Object(u.a)(t)),t.handleVideoEnd=t.handleVideoEnd.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleRatingChange",value:function(e){this.setState({currentCode:e})}},{key:"handleTimeChange",value:function(){var e=this.Player.current;this.setState({currentTime:Math.round(e.getCurrentTime())-300}),M.push(this.state);for(var a=0;a<M.length;a++){var t={};t.time=M[a].currentTime;for(var n=1;n<11;n++)M[a].currentCode===n?t[n]=1:t[n]=0;H[a]=t}}},{key:"handleNameChange",value:function(e){this.setState({coderName:e})}},{key:"handleCoupleChange",value:function(e){this.setState({codedCouple:e})}},{key:"handlePartnerChange",value:function(e){this.setState({codedPartner:e})}},{key:"handleSrcChange",value:function(e){this.setState({src:e,playing:!0})}},{key:"handleVideoEnd",value:function(){this.setState({endModal:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,{nameChange:this.handleNameChange,coupleChange:this.handleCoupleChange,partnerChange:this.handlePartnerChange,srcChange:this.handleSrcChange}),r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{className:"player",ref:this.Player,url:this.state.src,controls:!0,width:"100%",height:"74%",playing:this.state.playing,onProgress:this.handleTimeChange,onEnded:this.handleVideoEnd})),r.a.createElement(C,{ratingChange:this.handleRatingChange,codes:this.state.codes}),r.a.createElement(A,{exportedRatings:H,endModalToggle:this.state.endModal,coderName:this.state.coderName,codedCouple:this.state.codedCouple,codedPartner:this.state.codedPartner}))}}]),a}(n.Component),L=t(282),W=t(283),I=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement(W.a,{href:"/"},"SPAFF Coding App")),r.a.createElement("div",{className:"container"},r.a.createElement(B,null)))}}]),a}(n.Component),U=(t(270),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[139,1,2]]]);
//# sourceMappingURL=main.b25f8e43.chunk.js.map