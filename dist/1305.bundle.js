"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[1305,6006,7893,6148,9045,6442,7075],{21305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),i=n(87398),r=n(26006),o=n(68947),s=n(12050),c=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(i.Z,{as:"h4"},"componentDidUpdate()"),l.createElement(o.Z,null,"It is invoked immediately after updating occurs. This method is not called for the initial render."),l.createElement(a.Z,null,"componentDidUpdate(prevProps, prevState, snapshot)"),l.createElement(o.Z,null,l.createElement(c.B,null,"snapshot"),": If the component implements the",l.createElement(c.BI,null,"getSnapshotBeforeUpdate()")," lifecycle, the value it returns will be the value of the third parameter ",l.createElement(c.B,null,'"snapshot"'),", otherwise this parameter will be ",l.createElement(c.BI,null,"undefined"),"."),l.createElement(o.Z,null,"This method can be used to operate on the DOM when the component has been updated or calling API on change of props."),l.createElement(r.Z,null,"We may call setState() immediately in componentDidUpdate() but ",l.createElement(s.Z,null),l.createElement(c.B,null,"it must be wrapped in a condition")," or it will cause an ",l.createElement(s.Z,null),l.createElement(c.B,null,"infinite loop"),"."),l.createElement(r.Z,null,"componentDidUpdate() will not be invoked if ",l.createElement(s.Z,null),l.createElement(c.B,null,"shouldComponentUpdate()")," returns ",l.createElement(c.B,null,"false"),"."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>H});var l=n(4942),a=n(94184),i=n.n(a),r=n(67294),o=n(14289),s=n(78146),c=n(67115),m=n(76792),d=n(32209),u=n(41485),p=n(39602),h=n(44680),f=n(85893);const v=(0,p.Z)("h4");v.displayName="DivStyledAsH4";const E=(0,h.Z)("alert-heading",{Component:v}),Z=(0,h.Z)("alert-link",{Component:c.Z}),b={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},g=r.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:r,className:c,children:p,variant:h,onClose:v,dismissible:E,transition:Z,...b}=(0,o.Ch)(e,{show:"onClose"}),g=(0,m.vE)(n,"alert"),x=(0,s.Z)((e=>{v&&v(!1,e)})),k=!0===Z?d.Z:Z,w=(0,f.jsxs)("div",{role:"alert",...k?void 0:b,ref:t,className:i()(c,g,h&&`${g}-${h}`,E&&`${g}-dismissible`),children:[E&&(0,f.jsx)(u.Z,{onClick:x,"aria-label":a,variant:r}),p]});return k?(0,f.jsx)(k,{unmountOnExit:!0,...b,ref:void 0,in:l,children:w}):l?w:null}));g.displayName="Alert",g.defaultProps=b;const x=Object.assign(g,{Link:Z,Heading:E});var k=n(83819),w=n(93379),y=n.n(w),C=n(7795),B=n.n(C),N=n(90569),D=n.n(N),I=n(3565),U=n.n(I),A=n(19216),P=n.n(A),S=n(44589),T=n.n(S),j=n(11137),L={};L.styleTagTransform=T(),L.setAttributes=U(),L.insert=D().bind(null,"head"),L.domAPI=B(),L.insertStyleElement=P(),y()(j.Z,L),j.Z&&j.Z.locals&&j.Z.locals;var _=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,o=e.variant,s=void 0===o?"primary":o,c=i()((0,l.Z)({},"".concat(k.HL,"-note"),!0));return r.createElement("div",{className:c},r.createElement("div",{className:"note-text"},a),r.createElement(x,{key:s,variant:s},t))};const H=(0,r.memo)(_)},11137:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8081),a=n.n(l),i=n(23645),r=n.n(i)()(a());r.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const o=r}}]);