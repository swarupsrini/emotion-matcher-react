(window["webpackJsonpemotion-matcher-react"]=window["webpackJsonpemotion-matcher-react"]||[]).push([[0],{35:function(e,t,a){e.exports=a(61)},40:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),c=a.n(r),i=a(33),o=a(17);a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(4),u=a(5),h=a(7),m=a(6),d=a(8),v=(a(41),a(24)),p=a.n(v);p.a.initializeApp({apiKey:"AIzaSyDW2EwK6LYmbLyZIB7BXAhrWOO95XPWUL4",authDomain:"dash-1988a.firebaseapp.com",databaseURL:"https://dash-1988a.firebaseio.com",projectId:"dash-1988a",storageBucket:"",messagingSenderId:"366399792444",appId:"1:366399792444:web:57fde6551381ea5dfc6a39"});var g=p.a,f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={camera_data:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){if(!t)return e.setState({user:null}),console.log("gologin"),void e.props.history.push("/Login");e.setState({user:t}),e.props.history.push("/Home")}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},"splash")}}]),t}(n.Component),b=a(9),y=(a(52),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={chats:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g.auth().currentUser.uid;g.database().ref().child("chats").on("value",(function(a){g.database().ref("/users/"+t).once("value").then((function(t){for(var n=[],s=0;s<a.val().length;s++)for(var r=0;r<t.val().chatting.length;r++)t.val().chatting[r].chatKey===s&&n.push({messageIndex:s,user:t.val().chatting[r].to});e.setState({chats:n})}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"rooms-list"},s.a.createElement("div",{className:"help-text"},"ChatList"),this.state.chats.map((function(e,t){return s.a.createElement("div",{key:t,className:"message"},s.a.createElement("div",{className:"message-username"},e.user))})))}}]),t}(s.a.Component)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleFindNewUser=a.handleFindNewUser.bind(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleFindNewUser",value:function(){var e,t=g.auth().currentUser.uid;g.database().ref("/users/"+t).once("value").then((function(a){console.log(a.val()),e=a.val().emo[0],g.database().ref().child("users").once("value").then((function(n){for(var s in n.val()){for(var r=!1,c=0;c<a.val().history.length;c++)a.val().history[c]===s&&(r=!0);if(n.val()[s].emo[0]===e&&s!==t&&!r)return void g.database().ref("/chats/").once("value").then((function(e){var r=Object.keys(e.val()).length,c=a.val().chatting;c.push({chatKey:r,to:s});var i=n.val()[s].chatting;i.push({chatKey:r,to:t});var o=a.val().history;o.push(s);var l=n.val()[s].history;l.push(t),g.database().ref("users/"+t).set({history:o,emo:a.val().emo,chatting:c}),g.database().ref("users/"+s).set({history:l,emo:n.val()[s].emo,chatting:i}),g.database().ref("chats/"+r).set({messages:[-1]})}))}console.log("nothing found")}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"new-room-form"},s.a.createElement("form",null,s.a.createElement("button",{onClick:this.handleFindNewUser,type:"button"},"+chat")))}}]),t}(s.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={chats:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g.auth().currentUser.uid;g.database().ref("/users/"+t).once("value").then((function(t){t.val().chatting.length-1!==0&&g.database().ref("chats/"+t.val().chatting[t.val().chatting.length-1].chatKey).on("value",(function(t){e.setState({chats:t.val().messages})}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"message-list"},this.state.chats.map((function(e,t){return s.a.createElement("div",{key:t,className:"message"},s.a.createElement("div",{className:"message-username"},e.sender),s.a.createElement("div",{className:"message-text"},e.message))})))}}]),t}(s.a.Component),O=(a(53),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleChangeMessage=a.handleChangeMessage.bind(Object(b.a)(a)),a.send=a.send.bind(Object(b.a)(a)),a.state={message:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChangeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"send",value:function(e){var t=this,a=g.auth().currentUser.uid;g.database().ref("/users/"+a).once("value").then((function(e){e.val().chatting.length-1!==0&&(console.log(e.val().chatting[e.val().chatting.length-1].chatKey),g.database().ref("chats/"+e.val().chatting[e.val().chatting.length-1].chatKey).once("value").then((function(n){var s=n.val().messages;s.push({message:t.state.message,sender:a}),g.database().ref("chats/"+e.val().chatting[e.val().chatting.length-1].chatKey).set({messages:s}),t.setState({message:""})})))}))}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("div",null,s.a.createElement("label",null,"send: "),s.a.createElement("input",{value:this.state.message,onChange:this.handleChangeMessage,className:"message",placeholder:"message"})),s.a.createElement("button",{type:"button",onClick:this.send,className:"btn btn-primary"},"send"))}}]),t}(s.a.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={chats:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g.auth().currentUser.uid;g.database().ref("/users/"+t+"/emo").on("value",(function(t){e.setState({chats:t.val()})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"message-list"},s.a.createElement("div",{className:"room"},"past emotion"),this.state.chats.map((function(e,t){return-1!==e?s.a.createElement("div",{key:t,className:"room"},s.a.createElement("div",{className:"message-username"},e)):s.a.createElement("div",{key:t,className:"room"},s.a.createElement("div",{className:"message-username"}))})))}}]),t}(s.a.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleFindNewEmoji=a.handleFindNewEmoji.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleFindNewEmoji",value:function(){console.log("test"),this.props.history.push("./Camera")}},{key:"render",value:function(){return s.a.createElement("div",{className:"new-room-form"},s.a.createElement("form",null,s.a.createElement("button",{onClick:this.handleFindNewEmoji,type:"button"},"+emote")))}}]),t}(s.a.Component),C=(a(54),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).logout=a.logout.bind(Object(b.a)(a)),a.state={user:e.user,speed:10},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"logout",value:function(){g.auth().signOut(),this.props.history.push("/Login")}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",null,s.a.createElement(y,this.props),s.a.createElement(E,this.props)),s.a.createElement("div",null,s.a.createElement(j,this.props),s.a.createElement(O,this.props)),s.a.createElement("div",null,s.a.createElement(k,this.props),s.a.createElement(w,this.props),s.a.createElement("button",{onClick:this.logout},"Logout")))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).login=a.login.bind(Object(b.a)(a)),a.handleChangeName=a.handleChangeName.bind(Object(b.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(b.a)(a)),a.signup=a.signup.bind(Object(b.a)(a)),a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleChangeName",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(e){var t=this;e.preventDefault(),g.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e),t.props.history.push("/Home")})).catch((function(e){console.log(e)}))}},{key:"signup",value:function(e){var t=this;e.preventDefault(),g.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e),g.database().ref("users/"+e.user.uid).set({emo:[-1],chatting:[-1],history:[-1]}),t.props.history.push("/Home")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("div",null,s.a.createElement("label",null,"Email address"),s.a.createElement("input",{value:this.state.email,onChange:this.handleChangeName,type:"email",className:"email",id:"exampleInputEmail1",placeholder:"Enter email"})),s.a.createElement("div",null,s.a.createElement("label",null,"Password"),s.a.createElement("input",{value:this.state.password,onChange:this.handleChangePassword,type:"password",className:"password",id:"exampleInputPassword1",placeholder:"Password"})),s.a.createElement("button",{type:"button",onClick:this.login,className:"btn btn-primary"},"Login"),s.a.createElement("button",{type:"button",onClick:this.signup,style:{marginLeft:"25px"},className:"btn btn-success"},"Signup")))}}]),t}(n.Component),S=a(30),D=a(31),I=a.n(D),A=(a(60),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={imageData:null,image_name:"",saveImage:!1},a.setRef=function(e){a.webcam=e},a.capture=function(){var e=a.webcam.getScreenshot();a.setState({imageData:e})},a.onClickRetake=function(e){e.persist(),a.setState({imageData:null})},a.onClickSave=function(e){e.persist(),a.setState((function(e){return{saveImage:!e.saveImage}}))},a.handleChange=function(e){e.persist(),a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSaveSubmit=function(e){a.props.history.push({pathname:"/analyze",state:{img_data:a.state.imageData}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(I.a,{audio:!1,height:500,ref:this.setRef,screenshotFormat:"image/png",width:500,videoConstraints:{width:4096,height:4096,facingMode:"user"}}),s.a.createElement("div",{className:"button-container"},s.a.createElement("button",{onClick:this.capture},"Capture photo")),this.state.imageData?s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("img",{src:this.state.imageData,alt:""})),s.a.createElement("span",null,s.a.createElement("button",{onClick:this.onClickRetake},"Retake?")),s.a.createElement("span",null,s.a.createElement("button",{onClick:this.onClickSave},"Save")),this.state.saveImage?this.handleSaveSubmit():null):null)}}]),t}(s.a.Component));var U=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).finishedState=function(e){a.props.history.push({pathname:"/Home",state:{updateDB:!0}})},a.state={emID:null};var n=function(e){console.log(e),e=e.replace(/^data:image\/[a-z]+;base64,/,"");for(var t=window.atob(e),a=t.length,n=new Uint8Array(a),s=0;s<a;s++)n[s]=t.charCodeAt(s);return n.buffer}(a.props.location.state.img_data);console.log(n);fetch("https://faceanalysisstuff.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion",{method:"POST",headers:{"Content-Type":"application/octet-stream","Ocp-Apim-Subscription-Key":"67ef477d985b4a27b8b8396ef9370a01"},body:n}).then((function(e){return e.json()})).then((function(e){console.log(e);var t,n=0,s=e[0].faceAttributes.emotion;for(var r in s)if(s[r]>n){console.log(s[r]);var c=r;n=s[r]}"anger"==c&&(t=0),"contempt"==c&&(t=0),"disgust"==c&&(t=0),"fear"==c&&(t=1),"happiness"==c&&(t=2),"neutral"==c&&(t=3),"sadness"==c&&(t=1),"surprise"==c&&(t=2),a.setState({emID:t},a.finishedState),a.updateDB(c)}));return a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateDB",value:function(e){var t=g.auth().currentUser.uid;g.database().ref("/users/"+t).once("value").then((function(a){var n=a.val().emo;n.unshift(e),g.database().ref("users/"+t).set({emo:n,chatting:a.val().chatting,history:a.val().history})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Analyze"})}}]),t}(n.Component);c.a.render(s.a.createElement(i.a,{basename:"/emotion-matcher-react"},s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:f}),s.a.createElement(o.a,{path:"/Home",component:C}),s.a.createElement(o.a,{path:"/Login",component:N}),s.a.createElement(o.a,{path:"/Camera",component:A}),s.a.createElement(o.a,{path:"/Analyze",component:U}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.88701467.chunk.js.map