"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[8522,6006,5449,8259,5786,9685,8482,7893,6148,9045,6442,7075],{55449:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(81391),a=l(87398),o=l(26006),m=l(68947),u=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Default Export"),n.createElement(m.Z,null,"There can be only one ",n.createElement(u.BI,null,"default export")," per module. They can be imported with any name. Default members are imported without curly brackets ","{ }","."),n.createElement(r.Z,null,'// "./exported-module.js"\nexport default let x = 10;\nexport default function greet() { console.log("Hello!"); };'),n.createElement(o.Z,null,"If multiple default exports are written in a module, each default export will ",n.createElement(u.B,null,"overwrite")," the previous one. In the above example,",n.createElement(u.B,null,'"greet()"')," will be the default exported member."),n.createElement(r.Z,null,'// "./main-program.js"\nimport greet from "./exported-module.js";\ngreet();  // "Hello!"'),n.createElement(o.Z,null,"The export default syntax allows any expression. For example:"," ",n.createElement(u.B,null,"export default 10 + 20"),";"))}},8259:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(67294),r=l(68947),a=l(12050),o=l(9167),m=[{label:"Named export"},{label:"Default export"}];const u=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,null,"The ",n.createElement(o.B,null,"export")," declaration is used to ",n.createElement(o.I,null,"export")," values from a JavaScript module. Exported modules can then be imported into other programs with the ",n.createElement(o.I,null,"import declaration")," or ",n.createElement(o.I,null,"dynamic import"),". When a module updates the value of a binding that is exported, the update will be visible in its imported value. This update mechanism is called ",n.createElement(o.B,null,"live binding"),"."),n.createElement(r.Z,null,"In order to use the ",n.createElement(o.I,null,"export")," declaration, the file must be interpreted by the runtime as a ",n.createElement(o.I,null,"module"),". In HTML, this is done by adding the ",n.createElement(o.BI,null,'type="module"')," attribute to the ",n.createElement(o.BI,null,"<script>"),n.createElement(a.Z,null),"tag. Modules are automatically interpreted in ",n.createElement(o.B,null,"strict mode"),"."),n.createElement(r.Z,null,"Every module can have two types of export:",n.createElement(o.GS,{unOrdered:!0,items:m})))}},68522:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(67294),r=l(87398),a=l(68947),o=l(55449),m=l(8259),u=l(85786),c=l(99685),i=l(18482);const s=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"export statement"),n.createElement(a.Z,null,n.createElement(m.default,null),n.createElement(u.default,null),n.createElement(o.default,null),n.createElement(c.default,null),n.createElement(i.default,null)))}},85786:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(81391),a=l(87398),o=l(26006),m=l(68947),u=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Named Export"),n.createElement(m.Z,null,"As the name suggests, ",n.createElement(u.BI,null,"named exports")," are one which have a"," ",n.createElement(u.B,null,"unique name"),". A module can have multiple named exports. While importing, named exports must be referred to by the exact same name (optionally renaming it with ",n.createElement(u.B,null,"as"),"). Named exports should always be enclosed within ","{ }"," brackets."),n.createElement(r.Z,null,'export let myExportedVal = 10;\nexport function myFunc() { console.log("hello");\n'),n.createElement(o.Z,null,n.createElement(u.B,null,"export ","{}")," does not export an empty object. It is a no-op declaration that exports nothing."),n.createElement(a.Z,{as:"h4"},"Named export can be renamed while exporting from the module"),n.createElement(m.Z,null,"The ",n.createElement(u.B,null,"as")," operator can be used to rename the export declaration."),n.createElement(r.Z,null,'const func( ) { console.log("hello");\nexport { func as myFunction };\n'),n.createElement(m.Z,null,"The ",n.createElement(u.I,null,"import")," declaration will have to use ",n.createElement(u.BI,null,"myFunction")," in order to access it."),n.createElement(m.Z,null,"Exported members can also be renamed to something that's not a valid identifier."),n.createElement(r.Z,null,'const func( ) { console.log("hello");\nexport { func as "my-func" };'),n.createElement(m.Z,null,"The ",n.createElement(u.I,null,"import")," declaration will have to use ",n.createElement(u.BI,null,'"my-func"')," in order to access it."),n.createElement(m.Z,null,"The ",n.createElement(u.I,null,"export")," declarations are not subject to",n.createElement(u.B,null,"temporal dead zone")," rules. The ",n.createElement(u.I,null,"export")," declaration can be written, even before declaring the exported members. This would work because the ",n.createElement(u.I,null,"export")," statement is only a declaration, it does not utilize/evaluate the exported member."),n.createElement(r.Z,null,"export { x };\nlet x = 10;\n"),n.createElement(m.Z,null,"The ",n.createElement(u.I,null,"export")," declaration of ",n.createElement(u.B,null,'"x"')," is written even before declaring ",n.createElement(u.B,null,'"x"'),"."))}},99685:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(67294),r=l(81391),a=l(87398),o=l(68947),m=l(9167);const u=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Re-exporting/Aggregation"),n.createElement(o.Z,null,"A module can also export the members which are exported from other modules without writing two separate import/export statements. This concept is called ",n.createElement(m.I,null,"Re-exporting")," or ",n.createElement(m.I,null,"Aggregation"),". The",n.createElement(m.B,null,"from")," keyword is used with export declaration."),n.createElement(r.Z,null,'export { sayHi, sayBye } from "./exportedModule.js";'),n.createElement(o.Z,null,"We'll have to write two different ",n.createElement(m.I,null,"import/export")," statements for the same purpose, without ",n.createElement(m.I,null,"aggregation"),"."),n.createElement(r.Z,null,'import { sayHi, sayBye } from "./exportedModule.js";\nexport { sayHi, sayBye };\n'))}},18482:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(81391),a=l(87398),o=l(68947),m=l(12050),u=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Wild-card (*) export statement"),n.createElement(o.Z,null,"Wild card ",n.createElement(u.I,null,"export")," statement re-exports all the",n.createElement(m.Z,null),n.createElement(u.I,null,"named exports")," of a given",n.createElement(m.Z,null),n.createElement(u.I,null,"module"),", as the ",n.createElement(u.I,null,"named exports")," of the current ",n.createElement(u.I,null,"module"),". But the ",n.createElement(u.I,null,"default export")," of the given module is not re-exported."),n.createElement(o.Z,null,n.createElement(u.IU,null,"Syntax:"),n.createElement(u.cJ,null),'export * from "<module-path>.js"'),n.createElement(r.Z,null,'export  * from "./exported-module.js";'),n.createElement(o.Z,null,"If there are two or more wild-card export statements that implicitly",n.createElement(m.Z,null)," ",n.createElement(u.I,null,"re-exports")," the same name,",n.createElement(u.B,null,"neither one is re-exported"),"."),n.createElement(r.Z,null,'// "module-1.js"\nexport const a = 10;\n\n// "module-2.js"\nexport const a = 10;\n\n// "module-aggregator.js"\nexport * from "./module-1.js";\n\nexport * from "./module-2.js";\n'),n.createElement(r.Z,null,'// "main-program.js"\nimport * as md from "./module-aggregator.js";\nconsole.log(md.a);  // undefined\n'),n.createElement(o.Z,null,"Aggregator ",n.createElement(u.I,null,"re-exported")," the same member ",n.createElement(u.B,null,'"a"'),", therefore, it was not exported."))}},26006:(e,t,l)=>{l.d(t,{Z:()=>M});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),m=l(14289),u=l(78146),c=l(67115),i=l(76792),s=l(32209),d=l(41485),p=l(39602),E=l(44680),h=l(85893);const x=(0,p.Z)("h4");x.displayName="DivStyledAsH4";const f=(0,E.Z)("alert-heading",{Component:x}),g=(0,E.Z)("alert-link",{Component:c.Z}),Z={variant:"primary",show:!0,transition:s.Z,closeLabel:"Close alert"},b=o.forwardRef(((e,t)=>{const{bsPrefix:l,show:n,closeLabel:r,closeVariant:o,className:c,children:p,variant:E,onClose:x,dismissible:f,transition:g,...Z}=(0,m.Ch)(e,{show:"onClose"}),b=(0,i.vE)(l,"alert"),v=(0,u.Z)((e=>{x&&x(!1,e)})),y=!0===g?s.Z:g,w=(0,h.jsxs)("div",{role:"alert",...y?void 0:Z,ref:t,className:a()(c,b,E&&`${b}-${E}`,f&&`${b}-dismissible`),children:[f&&(0,h.jsx)(d.Z,{onClick:v,"aria-label":r,variant:o}),p]});return y?(0,h.jsx)(y,{unmountOnExit:!0,...Z,ref:void 0,in:n,children:w}):n?w:null}));b.displayName="Alert",b.defaultProps=Z;const v=Object.assign(b,{Link:g,Heading:f});var y=l(83819),w=l(93379),I=l.n(w),B=l(7795),j=l.n(B),T=l(90569),k=l.n(T),N=l(3565),A=l.n(N),F=l(19216),C=l.n(F),H=l(44589),L=l.n(H),S=l(11137),W={};W.styleTagTransform=L(),W.setAttributes=A(),W.insert=k().bind(null,"head"),W.domAPI=j(),W.insertStyleElement=C(),I()(S.Z,W),S.Z&&S.Z.locals&&S.Z.locals;var D=function(e){var t=e.children,l=e.noteText,r=void 0===l?"Note":l,m=e.variant,u=void 0===m?"primary":m,c=a()((0,n.Z)({},"".concat(y.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},r),o.createElement(v,{key:u,variant:u},t))};const M=(0,o.memo)(D)},11137:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const m=o}}]);