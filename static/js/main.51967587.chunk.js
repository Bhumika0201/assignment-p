(this["webpackJsonpdemo-pwc"]=this["webpackJsonpdemo-pwc"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),r=a.n(s),i=(a(13),a.p,a(7),a(3)),l=a(2),d=a(0),o=function(e){console.log(e.users);var t=c.a.useState([]),a=Object(l.a)(t,2);a[0],a[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"label",children:"USER TABLE"}),Object(d.jsxs)("div",{className:"grid-container-table",children:[Object(d.jsx)("div",{className:"label",style:{width:150},children:"Name"}),Object(d.jsx)("div",{className:"label",style:{width:200},children:"Address"}),Object(d.jsx)("div",{className:"label",style:{width:100},children:"Occupation"}),Object(d.jsx)("div",{className:"label",style:{width:100},children:"DOB"})]}),Object(d.jsx)("hr",{}),e.users.map((function(e){return Object(d.jsxs)("div",{children:["   ",Object(d.jsxs)("div",{className:"grid-container-table",children:[Object(d.jsx)("div",{style:{width:150,textAlign:"left"},children:e.name}),Object(d.jsx)("div",{style:{width:200,textAlign:"left"},children:e.address}),Object(d.jsx)("div",{style:{width:100},children:e.occupation}),Object(d.jsx)("div",{style:{width:100},children:e.dob})]}),Object(d.jsx)("hr",{})]})}))]})},j=function(){var e=c.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=c.a.useState(""),r=Object(l.a)(s,2),j=r[0],b=r[1],u=c.a.useState(""),m=Object(l.a)(u,2),h=m[0],O=m[1],p=c.a.useState(""),x=Object(l.a)(p,2),g=x[0],v=x[1],f=c.a.useState([]),N=Object(l.a)(f,2),y=N[0],w=N[1],C=c.a.useState([]),S=Object(l.a)(C,2),D=S[0],A=S[1];return Object(d.jsxs)("div",{className:"App",style:{flexDirection:"row",display:"flex"},children:[Object(d.jsxs)("form",{style:{width:"30%",flexDirection:"column",border:"solid",borderColor:"rgb(213 209 209)",padding:30,margin:40},onSubmit:function(e){if(e.preventDefault(),w([]),""===a){console.log("here");var t={name:"name",message:"Name Cannot be Empty"};w((function(e){return[].concat(Object(i.a)(e),[t])})),console.log(y)}if(""===h){var n={name:"address",message:"Address Cannot be Empty"};w((function(e){return[].concat(Object(i.a)(e),[n])}))}if(""===g){var c={name:"dob",message:"Date Of Birth Cannot be Empty"};w((function(e){return[].concat(Object(i.a)(e),[c])}))}if(new Date(g)>new Date){var s={name:"dob",message:"Date Of Birth Cannot be greater than today"};w((function(e){return[].concat(Object(i.a)(e),[s])}))}if(""===j){var r={name:"occupation",message:"Occupation Cannot be Empty"};w((function(e){return[].concat(Object(i.a)(e),[r])}))}else if(0===y.length){console.log(y);var l={name:a,occupation:j,address:h,dob:g};A((function(e){return[].concat(Object(i.a)(e),[l])}))}},children:[Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("label",{className:"label",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"name",className:"grid-item",name:"name",placeholder:"name",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(d.jsx)("div",{className:"panel",children:y.map((function(e){if("name"===e.name)return e.message}))}),Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("label",{className:"label",htmlFor:"address",children:"Address"}),Object(d.jsx)("textarea",{type:"address",className:"grid-item",name:"address",placeholder:"Address",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(d.jsx)("div",{className:"panel",children:y.map((function(e){if("address"===e.name)return e.message}))}),Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("label",{className:"label",htmlFor:"occcupation",children:"Occupation"}),Object(d.jsxs)("select",{className:"grid-item",name:"occupation",placeholder:"occupation",value:j,onChange:function(e){return b(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Please choose"}),Object(d.jsx)("option",{value:"Salaried",children:"Salaried"}),Object(d.jsx)("option",{value:"Government",children:"Government"}),Object(d.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(d.jsx)("div",{className:"panel",children:y.map((function(e){if("occupation"===e.name)return e.message}))}),Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("label",{className:"label",htmlFor:"dob",children:"DOB"}),Object(d.jsx)("input",{className:"grid-item",name:"dob",type:"date",placeholder:"dob",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(d.jsx)("div",{className:"panel",children:y.map((function(e){if("dob"===e.name)return e.message}))}),Object(d.jsx)("button",{type:"submit",style:{textAlign:"center"},children:"ADD USER"})]}),Object(d.jsx)("div",{style:{width:"70%",flexDirection:"column",border:"solid",borderColor:"rgb(213 209 209)",padding:30,margin:40},children:0!==D.length?Object(d.jsx)(o,{users:D}):Object(d.jsx)("p",{children:"No users present please add users"})})]})};var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()},7:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.51967587.chunk.js.map