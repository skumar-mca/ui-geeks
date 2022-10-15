"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[8524,6006,7893,6148,9045,6442,1305,7672,8626,8566,19,7075],{18524:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(68947),o=n(21305),c=n(77672),m=n(28626),u=n(18566),s=n(92509);const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Update LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the update phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(s.default,null),l.createElement(u.default,null),l.createElement(m.default,null),l.createElement(o.default,null)))}},21305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(81391),a=n(87398),o=n(26006),c=n(68947),m=n(12050),u=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"componentDidUpdate()"),l.createElement(c.Z,null,"It is invoked immediately after updating occurs. This method is not called for the initial render."),l.createElement(r.Z,null,"componentDidUpdate(prevProps, prevState, snapshot)"),l.createElement(c.Z,null,l.createElement(u.B,null,"snapshot"),": If the component implements the",l.createElement(u.BI,null,"getSnapshotBeforeUpdate()")," lifecycle, the value it returns will be the value of the third parameter ",l.createElement(u.B,null,'"snapshot"'),", otherwise this parameter will be ",l.createElement(u.BI,null,"undefined"),"."),l.createElement(c.Z,null,"This method can be used to operate on the DOM when the component has been updated or calling API on change of props."),l.createElement(o.Z,null,"We may call setState() immediately in componentDidUpdate() but ",l.createElement(m.Z,null),l.createElement(u.B,null,"it must be wrapped in a condition")," or it will cause an ",l.createElement(m.Z,null),l.createElement(u.B,null,"infinite loop"),"."),l.createElement(o.Z,null,"componentDidUpdate() will not be invoked if ",l.createElement(m.Z,null),l.createElement(u.B,null,"shouldComponentUpdate()")," returns ",l.createElement(u.B,null,"false"),"."))}},77672:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),m=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"static getDerivedStateFromProps()"),l.createElement(o.Z,null,"It is invoked right before calling the ",l.createElement(m.I,null,"render()")," method, both on the ",l.createElement(m.B,null,"initial mount")," and on ",l.createElement(m.B,null,"subsequent updates"),". It should",l.createElement(m.BI,null,"return an object")," to update the ",l.createElement(m.I,null,"state"),", or ",l.createElement(m.BI,null,"null"),l.createElement(c.Z,null)," to update nothing."),l.createElement(r.Z,null,"static getDerivedStateFromProps(props, state)"),l.createElement(o.Z,null,"This method exists for ",l.createElement(m.I,null,"rare use cases"),", where the ",l.createElement(m.BI,null,"state"),l.createElement(c.Z,null)," depends on changes in ",l.createElement(m.BI,null,"props"),". This method doesn't have access to the component instance. It is fired on every render, regardless of the cause."))}},28626:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),m=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"getSnapshotBeforeUpdate()"),l.createElement(o.Z,null,"It is invoked right before the most recently rendered output is committed to the DOM. It enables components to capture some information from the DOM (like scroll position) before it is potentially changed."),l.createElement(r.Z,null,"getSnapshotBeforeUpdate(prevProps, prevState)"),l.createElement(o.Z,null,"Any value returned from this method will be passed as a parameter to the",l.createElement(m.BI,null,"componentDidUpdate()"),". It should return either a ",l.createElement(c.Z,null),l.createElement(m.BI,null,"snapshot value")," or ",l.createElement(m.BI,null,"null"),"."))}},18566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),m=n(9167),u=[{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"React elements"),l.createElement(m.cJ,null),"Any valid JSX element.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Array and fragments"),l.createElement(m.cJ,null),"Let us ",l.createElement(m.B,null,"return multiple elements")," from the render. By default",l.createElement(c.Z,null)," ",l.createElement(m.I,null,"render()")," method should return only ",l.createElement(m.B,null,"one element"),", but ",l.createElement(c.Z,null)," ",l.createElement(m.BI,null,"fragments")," can be used to ",l.createElement(m.B,null,"combine/wrap"),l.createElement(c.Z,null)," multiple elements that can be returned from the ",l.createElement(c.Z,null),l.createElement(m.I,null,"render()")," method.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Portal"),l.createElement(m.cJ,null),"Portals help render children into a ",l.createElement(m.BI,null,"different DOM subtree"),". Will learn more about portals later.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"String and numbers"),l.createElement(m.cJ,null),"These are rendered as text nodes in the DOM.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Booleans or null"),l.createElement(m.cJ,null),"Renders ",l.createElement(m.B,null,"nothing"),". Most used to implement conditional rendering, for example: ",l.createElement(m.I,null,"isTrue && <Welcome />"),".")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"render()"),l.createElement(o.Z,null,"The render() method is the only ",l.createElement(m.B,null,"required")," method in a ",l.createElement(m.I,null,"class"),l.createElement(c.Z,null)," component. When called, it should examine ",l.createElement(m.BI,null,"this.props"),l.createElement(c.Z,null)," and ",l.createElement(m.BI,null,"this.state")," and return one of the following types:"),l.createElement(m.GS,{unOrdered:!0,expanded:!0,items:u}),l.createElement(o.Z,null,"The ",l.createElement(m.I,null,"render()")," method should be pure, meaning that it ",l.createElement(c.Z,null),l.createElement(m.B,null,"does not modify")," state, it returns the same result each time it's invoked, and it does not directly interact with the browser."),l.createElement(a.Z,null,"render() will not be invoked if ",l.createElement(m.B,null,"shouldComponentUpdate()")," returns false."))}},92509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(81391),a=n(91573),o=n(87398),c=n(26006),m=n(68947),u=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h4"},"shouldComponentUpdate()"),l.createElement(m.Z,null,"This method is used to ",l.createElement(s.B,null,"skip the re-rendering")," of the component. This method should ",l.createElement(s.BI,null,"return a boolean value"),". If it returns",l.createElement(u.Z,null)," ",l.createElement(s.BI,null,"false"),", then ",l.createElement(s.B,null,"UNSAFE_componentWillUpdate()"),",",l.createElement(u.Z,null)," ",l.createElement(s.B,null,"render()")," and ",l.createElement(s.B,null,"componentDidUpdate()")," methods are not invoked."),l.createElement(r.Z,{language:a.r.JSX},"shouldComponentUpdate(nextProps, nextState)"),l.createElement(m.Z,null,"The default behavior is to re-render on every change in ",l.createElement(s.I,null,"state")," or",l.createElement(u.Z,null)," ",l.createElement(s.I,null,"props"),". We can use this method to let React know if the output is not affected by the current change in state or props. React prefers to rely on default behavior in the majority of the cases."),l.createElement(m.Z,null,"It is invoked ",l.createElement(s.B,null,"before rendering")," when ",l.createElement(s.B,null,"new")," ",l.createElement(s.I,null,"props")," or",l.createElement(u.Z,null)," ",l.createElement(s.I,null,"state")," are being received. Defaults to true. This method is not called for the ",l.createElement(s.I,null,"initial render")," or when ",l.createElement(s.I,null,"forceUpdate()"),l.createElement(u.Z,null)," is used."),l.createElement(c.Z,null,"Returning ",l.createElement(s.B,null,"false")," does not prevent child components from re-rendering when ",l.createElement(s.B,null,"their")," state changes."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>M});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(14289),m=n(78146),u=n(67115),s=n(76792),i=n(32209),d=n(41485),h=n(39602),E=n(44680),p=n(85893);const f=(0,h.Z)("h4");f.displayName="DivStyledAsH4";const Z=(0,E.Z)("alert-heading",{Component:f}),g=(0,E.Z)("alert-link",{Component:u.Z}),v={variant:"primary",show:!0,transition:i.Z,closeLabel:"Close alert"},b=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:r,closeVariant:o,className:u,children:h,variant:E,onClose:f,dismissible:Z,transition:g,...v}=(0,c.Ch)(e,{show:"onClose"}),b=(0,s.vE)(n,"alert"),B=(0,m.Z)((e=>{f&&f(!1,e)})),I=!0===g?i.Z:g,y=(0,p.jsxs)("div",{role:"alert",...I?void 0:v,ref:t,className:a()(u,b,E&&`${b}-${E}`,Z&&`${b}-dismissible`),children:[Z&&(0,p.jsx)(d.Z,{onClick:B,"aria-label":r,variant:o}),h]});return I?(0,p.jsx)(I,{unmountOnExit:!0,...v,ref:void 0,in:l,children:y}):l?y:null}));b.displayName="Alert",b.defaultProps=v;const B=Object.assign(b,{Link:g,Heading:Z});var I=n(83819),y=n(93379),w=n.n(y),k=n(7795),x=n.n(k),U=n(90569),S=n.n(U),D=n(3565),T=n.n(D),C=n(19216),F=n.n(C),P=n(44589),A=n.n(P),N=n(11137),O={};O.styleTagTransform=A(),O.setAttributes=T(),O.insert=S().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=F(),w()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var J=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,c=e.variant,m=void 0===c?"primary":c,u=a()((0,l.Z)({},"".concat(I.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},r),o.createElement(B,{key:m,variant:m},t))};const M=(0,o.memo)(J)},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const c=o}}]);