"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5786,6006,7893,6148,9045,6442,7075],{85786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),a=n(81391),r=n(87398),o=n(26006),i=n(68947),s=n(9167);const c=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Named Export"),l.createElement(i.Z,null,"As the name suggests, ",l.createElement(s.BI,null,"named exports")," are one which have a"," ",l.createElement(s.B,null,"unique name"),". A module can have multiple named exports. While importing, named exports must be referred to by the exact same name (optionally renaming it with ",l.createElement(s.B,null,"as"),"). Named exports should always be enclosed within ","{ }"," brackets."),l.createElement(a.Z,null,'export let myExportedVal = 10;\nexport function myFunc() { console.log("hello");\n'),l.createElement(o.Z,null,l.createElement(s.B,null,"export ","{}")," does not export an empty object. It is a no-op declaration that exports nothing."),l.createElement(r.Z,{as:"h4"},"Named export can be renamed while exporting from the module"),l.createElement(i.Z,null,"The ",l.createElement(s.B,null,"as")," operator can be used to rename the export declaration."),l.createElement(a.Z,null,'const func( ) { console.log("hello");\nexport { func as myFunction };\n'),l.createElement(i.Z,null,"The ",l.createElement(s.I,null,"import")," declaration will have to use ",l.createElement(s.BI,null,"myFunction")," in order to access it."),l.createElement(i.Z,null,"Exported members can also be renamed to something that's not a valid identifier."),l.createElement(a.Z,null,'const func( ) { console.log("hello");\nexport { func as "my-func" };'),l.createElement(i.Z,null,"The ",l.createElement(s.I,null,"import")," declaration will have to use ",l.createElement(s.BI,null,'"my-func"')," in order to access it."),l.createElement(i.Z,null,"The ",l.createElement(s.I,null,"export")," declarations are not subject to",l.createElement(s.B,null,"temporal dead zone")," rules. The ",l.createElement(s.I,null,"export")," declaration can be written, even before declaring the exported members. This would work because the ",l.createElement(s.I,null,"export")," statement is only a declaration, it does not utilize/evaluate the exported member."),l.createElement(a.Z,null,"export { x };\nlet x = 10;\n"),l.createElement(i.Z,null,"The ",l.createElement(s.I,null,"export")," declaration of ",l.createElement(s.B,null,'"x"')," is written even before declaring ",l.createElement(s.B,null,'"x"'),"."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>$});var l=n(4942),a=n(94184),r=n.n(a),o=n(67294),i=n(14289),s=n(78146),c=n(67115),m=n(76792),u=n(32209),d=n(41485),p=n(39602),h=n(44680),x=n(85893);const E=(0,p.Z)("h4");E.displayName="DivStyledAsH4";const b=(0,h.Z)("alert-heading",{Component:E}),f=(0,h.Z)("alert-link",{Component:c.Z}),v={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:o,className:c,children:p,variant:h,onClose:E,dismissible:b,transition:f,...v}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,m.vE)(n,"alert"),g=(0,s.Z)((e=>{E&&E(!1,e)})),y=!0===f?u.Z:f,w=(0,x.jsxs)("div",{role:"alert",...y?void 0:v,ref:t,className:r()(c,Z,h&&`${Z}-${h}`,b&&`${Z}-dismissible`),children:[b&&(0,x.jsx)(d.Z,{onClick:g,"aria-label":a,variant:o}),p]});return y?(0,x.jsx)(y,{unmountOnExit:!0,...v,ref:void 0,in:l,children:w}):l?w:null}));Z.displayName="Alert",Z.defaultProps=v;const g=Object.assign(Z,{Link:f,Heading:b});var y=n(83819),w=n(93379),k=n.n(w),I=n(7795),B=n.n(I),N=n(90569),T=n.n(N),C=n(3565),j=n.n(C),A=n(19216),F=n.n(A),L=n(44589),_=n.n(L),z=n(11137),H={};H.styleTagTransform=_(),H.setAttributes=j(),H.insert=T().bind(null,"head"),H.domAPI=B(),H.insertStyleElement=F(),k()(z.Z,H),z.Z&&z.Z.locals&&z.Z.locals;var P=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=r()((0,l.Z)({},"".concat(y.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},a),o.createElement(g,{key:s,variant:s},t))};const $=(0,o.memo)(P)},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),r=n(23645),o=n.n(r)()(a());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const i=o}}]);