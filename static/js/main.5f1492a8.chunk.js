(this.webpackJsonpopenangletool=this.webpackJsonpopenangletool||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(15),c=s.n(i),l=(s(46),s(30)),h=s(31),r=s(17),o=s(41),d=s(40),j=s(39),b=s(12),x=s(11),p=s(8),O=s(7),u=s(21),m=s(19),f=s(20),g=s(25),v=s(60),C=s(61),w=function(){function e(){Object(l.a)(this,e),this.solved=!1}return Object(h.a)(e,[{key:"set",value:function(e){this.dw=Number.parseFloat(e.dw),this.lp=Number.parseFloat(e.lp),this.beta=this.rad(Number.parseFloat(e.beta)),this.ds=Number.parseFloat(e.ds),this.dj=Number.parseFloat(e.dj),this.o=Number.parseFloat(e.o),this.hc=Number.parseFloat(e.hc),this.solve()}},{key:"rad",value:function(e){return e/180*Math.PI}},{key:"deg",value:function(e){return 180*e/Math.PI}},{key:"solve",value:function(){var e=0,t=Math.PI,s=this.x(e),a=this.x(t);for(this.solved=!1;Math.sign(s)!==Math.sign(a)&&t-e>1e-5;){var n=.5*(e+t),i=this.x(n);Math.sign(s)===Math.sign(i)?(e=n,s=i):(t=n,a=i),this.solved=!0}this.solved&&(this.alpha=.5*(e+t),this.h=.5*(this.ds*Math.cos(this.alpha+this.beta)-2*this.lp*Math.cos(this.alpha+this.beta)+this.dw*Math.sin(this.alpha)-this.dj*Math.sin(this.alpha+this.beta)-this.ds*Math.sin(this.alpha+this.beta)),this.hr=Math.sqrt(this.o*this.o+this.h*this.h)+.5*this.ds-.5*this.dw,this.hn=this.h+.5*this.ds-this.hc)}},{key:"x",value:function(e){return-this.o+.5*this.dw*Math.cos(e)-.5*(this.dj+this.ds)*Math.cos(e+this.beta)+(-.5*this.ds+this.lp)*Math.sin(e+this.beta)}},{key:"get",value:function(){return this.solved?{alpha:this.deg(this.alpha).toFixed(1).toString(),h:this.h.toFixed(1).toString(),hr:this.hr.toFixed(1).toString(),hn:this.hn.toFixed(1).toString()}:{alpha:"-",h:"-",hr:"-",hn:"-"}}}]),e}(),y=(s(47),s.p+"static/media/geo1.dbea02bb.svg"),S=s.p+"static/media/geo2.9467a505.svg",k=s(1),P=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;if(Object(l.a)(this,s),(a=t.call(this,e)).state={profiles:[{name:"default",dw:"250",lp:"139",beta:"15",ds:"12",dj:"12",o:"50",hc:"30"}],activeProfile:0,showDeleteConfirm:!1},"undefined"!==typeof localStorage){var n=localStorage.getItem("state");n&&(a.state=JSON.parse(n),a.state.showDeleteConfirm=!1)}return a.presets=[{name:"200 mm Wheel",dw:"200",lp:"139",beta:"15",ds:"12",dj:"12",o:"0",hc:"0"},{name:"250 mm Wheel",dw:"250",lp:"139",beta:"15",ds:"12",dj:"12",o:"0",hc:"0"},{name:"T8 vertical USB",dw:"250",lp:"139",beta:"15",ds:"12",dj:"12",o:"50",hc:"29"},{name:"T4",dw:"200",lp:"139",beta:"15",ds:"12",dj:"12",o:"50",hc:"20"}],a.handleSelect=a.handleSelect.bind(Object(r.a)(a)),a.handleDuplicate=a.handleDuplicate.bind(Object(r.a)(a)),a.handleRemove=a.handleRemove.bind(Object(r.a)(a)),a.handleDeleteConfirmClose=a.handleDeleteConfirmClose.bind(Object(r.a)(a)),a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(r.a)(a)),a.calc=new w,a}return Object(h.a)(s,[{key:"handleSelect",value:function(e,t){var s=parseInt(e,10);if(s<this.state.profiles.length)this.setState({activeProfile:s});else{var a=JSON.parse(JSON.stringify(this.presets[s-this.state.profiles.length]));this.state.profiles.push(a),this.setState({profiles:this.state.profiles,activeProfile:this.state.profiles.length-1})}}},{key:"handleDuplicate",value:function(){var e=JSON.parse(JSON.stringify(this.state.profiles[this.state.activeProfile]));e.name+=" (copy)",this.state.profiles.push(e),this.setState({profiles:this.state.profiles,activeProfile:this.state.profiles.length-1})}},{key:"handleRemove",value:function(){this.state.profiles.length>1&&this.setState({showDeleteConfirm:!0})}},{key:"handleDeleteConfirmClose",value:function(e){if(e&&this.state.profiles.length>1){this.state.profiles.splice(this.state.activeProfile,1);var t=this.state.activeProfile;t>=this.state.profiles.length&&(t=this.state.profiles.length-1),this.setState({profiles:this.state.profiles,activeProfile:t})}this.setState({showDeleteConfirm:!1})}},{key:"handleChange",value:function(e){var t=e.target,s="checkbox"===t.type?t.checked:t.value,a=t.name;this.state.profiles[this.state.activeProfile][a]=s,this.setState({profiles:this.state.profiles})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"componentDidUpdate",value:function(){"undefined"!==typeof localStorage&&localStorage.setItem("state",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state.profiles[this.state.activeProfile];this.calc.set(t);var s=this.calc.get(),a=[];return a.push(Object(k.jsx)(m.a.Header,{children:"my Profiles"})),this.state.profiles.forEach((function(t,s){a.push(Object(k.jsx)(m.a.Item,{active:s===e.state.activeProfile,eventKey:s,onSelect:e.handleSelect,children:t.name}))})),a.push(Object(k.jsx)(m.a.Header,{children:"add Preset"})),this.presets.forEach((function(t,s){a.push(Object(k.jsx)(m.a.Item,{eventKey:e.state.profiles.length+s,onSelect:e.handleSelect,children:t.name}))})),Object(k.jsxs)(j.a,{children:[Object(k.jsxs)(p.a,{onSubmit:this.handleSubmit,children:[Object(k.jsxs)(b.a,{className:"my-4",children:[Object(k.jsx)(x.a,{sm:"4",children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(m.a.Toggle,{id:"machine",size:"lg",className:"app-shadow",children:"Profiles"}),Object(k.jsx)(m.a.Menu,{className:"app-shadow",children:a})]})}),Object(k.jsx)(x.a,{sm:"8",children:Object(k.jsxs)(O.a,{className:"app-shadow",children:[Object(k.jsx)(p.a.Control,{size:"lg",type:"text",name:"name",value:t.name,onChange:this.handleChange}),Object(k.jsxs)(O.a.Append,{children:[Object(k.jsxs)(f.a,{variant:"success",size:"lg",title:"duplicate",onClick:this.handleDuplicate,children:["\xa0",Object(k.jsx)(v.a,{}),"\xa0"]}),Object(k.jsxs)(f.a,{variant:"danger",size:"lg",title:"remove",onClick:this.handleRemove,disabled:this.state.profiles.length<=1,children:["\xa0",Object(k.jsx)(C.a,{}),"\xa0"]})]})]})})]}),Object(k.jsxs)(u.a,{className:"mb-4",children:[Object(k.jsx)(u.a.Header,{children:"Sharpening Angle"}),Object(k.jsx)(u.a.Body,{children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(x.a,{lg:3,className:"mb-2",children:Object(k.jsx)("img",{src:y})}),Object(k.jsxs)(x.a,{lg:9,children:[Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"dw",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Wheel Diameter"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["d",Object(k.jsx)("sub",{children:"w"})]})}),Object(k.jsx)(p.a.Control,{type:"text",name:"dw",value:t.dw,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"lp",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Projection Distance"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["l",Object(k.jsx)("sub",{children:"p"})]})}),Object(k.jsx)(p.a.Control,{type:"text",name:"lp",value:t.lp,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"beta",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Grind Angle"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsx)(O.a.Text,{children:"\u03b2"})}),Object(k.jsx)(p.a.Control,{type:"text",name:"beta",value:t.beta,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"\xb0"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"hr",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Wheel Distance"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["h",Object(k.jsx)("sub",{children:"r"})]})}),Object(k.jsx)(p.a.Control,{type:"text",readOnly:!0,placeholder:s.hr}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),t.hc>0&&Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"hn",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Case Distance"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["h",Object(k.jsx)("sub",{children:"n"})]})}),Object(k.jsx)(p.a.Control,{type:"text",readOnly:!0,placeholder:s.hn}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]})]})]})})]}),Object(k.jsxs)(u.a,{className:"mb-4",children:[Object(k.jsx)(u.a.Header,{children:"Machine Settings"}),Object(k.jsx)(u.a.Body,{children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(x.a,{lg:3,className:"mb-2",children:Object(k.jsx)("img",{src:S})}),Object(k.jsxs)(x.a,{lg:9,children:[Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"ds",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Support Bar Diameter"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["d",Object(k.jsx)("sub",{children:"s"})]})}),Object(k.jsx)(p.a.Control,{type:"text",name:"ds",value:t.ds,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"dj",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Knife Jig Diameter"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["d",Object(k.jsx)("sub",{children:"j"})]})}),Object(k.jsx)(p.a.Control,{type:"text",name:"dj",value:t.dj,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"o",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Support Bar Offset"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsx)(O.a.Text,{children:"o"})}),Object(k.jsx)(p.a.Control,{type:"text",name:"o",value:t.o,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]}),Object(k.jsxs)(p.a.Group,{as:b.a,controlId:"hc",children:[Object(k.jsx)(p.a.Label,{column:!0,sm:3,children:"Case Height"}),Object(k.jsx)(x.a,{sm:9,children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(O.a.Prepend,{children:Object(k.jsxs)(O.a.Text,{children:["h",Object(k.jsx)("sub",{children:"c"})]})}),Object(k.jsx)(p.a.Control,{type:"text",name:"hc",value:t.hc,onChange:this.handleChange}),Object(k.jsx)(O.a.Append,{children:Object(k.jsx)(O.a.Text,{children:"mm"})})]})})]})]})]})})]}),Object(k.jsx)(b.a,{className:"mb-4"})]}),Object(k.jsxs)(g.a,{show:this.state.showDeleteConfirm,onHide:this.handleDeleteConfirmClose,children:[Object(k.jsx)(g.a.Header,{closeButton:!0,children:Object(k.jsx)(g.a.Title,{children:"Confirm Deletion"})}),Object(k.jsx)(g.a.Body,{children:"Are you sure you want to delete the current profile?"}),Object(k.jsxs)(g.a.Footer,{children:[Object(k.jsx)(f.a,{variant:"secondary",onClick:function(){return e.handleDeleteConfirmClose(!1)},children:"Cancel"}),Object(k.jsx)(f.a,{variant:"danger",onClick:function(){return e.handleDeleteConfirmClose(!0)},children:"Delete"})]})]})]})}}]),s}(n.a.Component),D=(s(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.5f1492a8.chunk.js.map