"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[6734,6006,7893,6148,9045,6442,573,8135,8524,5815,1305,8506,8157,7672,8626,8566,19,7075],{46734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),r=n(87398),a=n(68947),o=n(12050),c=n(9167),m=n(10573),u=n(48135),i=n(18524),s=[{label:"Mounting",items:[{label:l.createElement(c.B,null,"constructor()")},{label:"static getDerivedStateFromProps()"},{label:l.createElement(c.B,null,"render()")},{label:l.createElement(c.B,null,"componentDidMount()")}]},{label:"Update",items:[{label:"static getDerivedStateFromProps()"},{label:"shouldComponentUpdate()"},{label:l.createElement(c.B,null,"render()")},{label:"getSnapshotBeforeUpdate()"},{label:l.createElement(c.B,null,"componentDidUpdate()")}]},{label:"Unmounting",items:[{label:l.createElement(c.B,null,"componentWillUnmount()")}]},{label:"Error Handling",items:[{label:"static getDerivedStateFromError()"},{label:"componentDidCatch()"}]}];const d=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Lifecycle Methods"),l.createElement(a.Z,null,"Each component has several ",l.createElement(c.B,null,'"lifecycle methods"')," that we can override to run code at particular times in the process. Lifecycle methods can be grouped by the phases. Methods marked in",l.createElement(o.Z,null)," ",l.createElement(c.B,null,"bold")," are commonly used methods."),l.createElement(c.GS,{unOrdered:!0,items:s}),l.createElement(a.Z,null,"Lets learn about each lifecycle method in detail."),l.createElement(a.Z,null,l.createElement(m.default,null),l.createElement(i.default,null),l.createElement(u.default,null)))}},10573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(68947),o=n(15815),c=n(68157),m=n(77672),u=n(18566);const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Mounting LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the mounting phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(m.default,null),l.createElement(u.default,null),l.createElement(o.default,null)))}},48135:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),r=n(87398),a=n(68947),o=n(58506);const c=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Unmounting LifeCycle Method"),l.createElement(a.Z,null,"Below is the lifecycle method which is called in the unmount phase of the component."),l.createElement(a.Z,null,l.createElement(o.default,null)))}},18524:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(87398),a=n(68947),o=n(21305),c=n(77672),m=n(28626),u=n(18566),i=n(92509);const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Update LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the update phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(i.default,null),l.createElement(u.default,null),l.createElement(m.default,null),l.createElement(o.default,null)))}},15815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),m=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"componentDidMount()"),l.createElement(o.Z,null,"It is invoked immediately after a component is mounted.",l.createElement(c.Z,null)," ",l.createElement(m.B,null,"Initialization")," that ",l.createElement(m.B,null,"requires DOM nodes")," should be written here, for example, setting tooltips where we need DOM nodes before rendering to get its placement . It is also a good place to",l.createElement(c.Z,null)," ",l.createElement(m.B,null,"make API calls")," or ",l.createElement(m.B,null,"set up any subscriptions"),"."),l.createElement(a.Z,null,"We may call ",l.createElement(m.B,null,"setState()")," immediately in ",l.createElement(m.B,null,"componentDidMount()"),". It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice, the user won't see the intermediate state. Use this pattern with caution because it often causes performance issues."))}},21305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(81391),a=n(87398),o=n(26006),c=n(68947),m=n(12050),u=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"componentDidUpdate()"),l.createElement(c.Z,null,"It is invoked immediately after updating occurs. This method is not called for the initial render."),l.createElement(r.Z,null,"componentDidUpdate(prevProps, prevState, snapshot)"),l.createElement(c.Z,null,l.createElement(u.B,null,"snapshot"),": If the component implements the",l.createElement(u.BI,null,"getSnapshotBeforeUpdate()")," lifecycle, the value it returns will be the value of the third parameter ",l.createElement(u.B,null,'"snapshot"'),", otherwise this parameter will be ",l.createElement(u.BI,null,"undefined"),"."),l.createElement(c.Z,null,"This method can be used to operate on the DOM when the component has been updated or calling API on change of props."),l.createElement(o.Z,null,"We may call setState() immediately in componentDidUpdate() but ",l.createElement(m.Z,null),l.createElement(u.B,null,"it must be wrapped in a condition")," or it will cause an ",l.createElement(m.Z,null),l.createElement(u.B,null,"infinite loop"),"."),l.createElement(o.Z,null,"componentDidUpdate() will not be invoked if ",l.createElement(m.Z,null),l.createElement(u.B,null,"shouldComponentUpdate()")," returns ",l.createElement(u.B,null,"false"),"."))}},58506:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(87398),a=n(68947),o=n(12050),c=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"componentWillUnmount()"),l.createElement(a.Z,null,"It is invoked immediately before a component is ",l.createElement(c.B,null,"unmounted")," and",l.createElement(o.Z,null)," ",l.createElement(c.B,null,"destroyed"),". This method is used to perform ",l.createElement(o.Z,null),l.createElement(c.B,null,"cleanup tasks")," like, invalidating timers, canceling network calls or for unsubscribing from the subscriptions."),l.createElement(a.Z,null,"Once a component is unmounted, it will never be mounted again. We should not call setState() in componentWillUnmount() because the component will never be re-rendered."))}},68157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),m=n(9167),u=[{label:l.createElement(l.Fragment,null,"Initializing ",l.createElement(m.B,null,"local state")," by assigning an object to this.state.")},{label:l.createElement(l.Fragment,null,"Binding ",l.createElement(m.B,null,"event handler")," methods to an instance.")}];const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"constructor()"),l.createElement(o.Z,null,"The constructor for a React component is called before it is mounted. When implementing the constructor, we should call ",l.createElement(m.BI,null,"super(props)"),l.createElement(c.Z,null)," before any other statement. Otherwise, ",l.createElement(m.BI,null,'"this.props"'),l.createElement(c.Z,null)," will be ",l.createElement(m.BI,null,"undefined")," in the ",l.createElement(m.I,null,"constructor"),". Avoid introducing any ",l.createElement(m.I,null,"side-effects")," or ",l.createElement(m.I,null,"subscriptions")," in the constructor."),l.createElement(o.Z,null,"In React, ",l.createElement(m.I,null,"constructors")," are only used for two purposes:",l.createElement(m.GS,{unOrdered:!0,items:u})),l.createElement(o.Z,null,"The ",l.createElement(m.I,null,"constructor")," is the only place where we should assign",l.createElement(m.BI,null,"this.state")," directly. In all other places, we should use",l.createElement(c.Z,null)," ",l.createElement(m.I,null,"this.setState()"),"."),l.createElement(a.Z,null,"constructor is ",l.createElement(m.B,null,"optional"),". If we neither initialize state nor bind methods, then we don't need to implement a constructor."))}},77672:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),m=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"static getDerivedStateFromProps()"),l.createElement(o.Z,null,"It is invoked right before calling the ",l.createElement(m.I,null,"render()")," method, both on the ",l.createElement(m.B,null,"initial mount")," and on ",l.createElement(m.B,null,"subsequent updates"),". It should",l.createElement(m.BI,null,"return an object")," to update the ",l.createElement(m.I,null,"state"),", or ",l.createElement(m.BI,null,"null"),l.createElement(c.Z,null)," to update nothing."),l.createElement(r.Z,null,"static getDerivedStateFromProps(props, state)"),l.createElement(o.Z,null,"This method exists for ",l.createElement(m.I,null,"rare use cases"),", where the ",l.createElement(m.BI,null,"state"),l.createElement(c.Z,null)," depends on changes in ",l.createElement(m.BI,null,"props"),". This method doesn't have access to the component instance. It is fired on every render, regardless of the cause."))}},28626:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(81391),a=n(87398),o=n(68947),c=n(12050),m=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"getSnapshotBeforeUpdate()"),l.createElement(o.Z,null,"It is invoked right before the most recently rendered output is committed to the DOM. It enables components to capture some information from the DOM (like scroll position) before it is potentially changed."),l.createElement(r.Z,null,"getSnapshotBeforeUpdate(prevProps, prevState)"),l.createElement(o.Z,null,"Any value returned from this method will be passed as a parameter to the",l.createElement(m.BI,null,"componentDidUpdate()"),". It should return either a ",l.createElement(c.Z,null),l.createElement(m.BI,null,"snapshot value")," or ",l.createElement(m.BI,null,"null"),"."))}},18566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),m=n(9167),u=[{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"React elements"),l.createElement(m.cJ,null),"Any valid JSX element.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Array and fragments"),l.createElement(m.cJ,null),"Let us ",l.createElement(m.B,null,"return multiple elements")," from the render. By default",l.createElement(c.Z,null)," ",l.createElement(m.I,null,"render()")," method should return only ",l.createElement(m.B,null,"one element"),", but ",l.createElement(c.Z,null)," ",l.createElement(m.BI,null,"fragments")," can be used to ",l.createElement(m.B,null,"combine/wrap"),l.createElement(c.Z,null)," multiple elements that can be returned from the ",l.createElement(c.Z,null),l.createElement(m.I,null,"render()")," method.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Portal"),l.createElement(m.cJ,null),"Portals help render children into a ",l.createElement(m.BI,null,"different DOM subtree"),". Will learn more about portals later.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"String and numbers"),l.createElement(m.cJ,null),"These are rendered as text nodes in the DOM.")},{label:l.createElement(l.Fragment,null,l.createElement(m.B,null,"Booleans or null"),l.createElement(m.cJ,null),"Renders ",l.createElement(m.B,null,"nothing"),". Most used to implement conditional rendering, for example: ",l.createElement(m.I,null,"isTrue && <Welcome />"),".")}];const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"render()"),l.createElement(o.Z,null,"The render() method is the only ",l.createElement(m.B,null,"required")," method in a ",l.createElement(m.I,null,"class"),l.createElement(c.Z,null)," component. When called, it should examine ",l.createElement(m.BI,null,"this.props"),l.createElement(c.Z,null)," and ",l.createElement(m.BI,null,"this.state")," and return one of the following types:"),l.createElement(m.GS,{unOrdered:!0,expanded:!0,items:u}),l.createElement(o.Z,null,"The ",l.createElement(m.I,null,"render()")," method should be pure, meaning that it ",l.createElement(c.Z,null),l.createElement(m.B,null,"does not modify")," state, it returns the same result each time it's invoked, and it does not directly interact with the browser."),l.createElement(a.Z,null,"render() will not be invoked if ",l.createElement(m.B,null,"shouldComponentUpdate()")," returns false."))}},92509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(81391),a=n(91573),o=n(87398),c=n(26006),m=n(68947),u=n(12050),i=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h4"},"shouldComponentUpdate()"),l.createElement(m.Z,null,"This method is used to ",l.createElement(i.B,null,"skip the re-rendering")," of the component. This method should ",l.createElement(i.BI,null,"return a boolean value"),". If it returns",l.createElement(u.Z,null)," ",l.createElement(i.BI,null,"false"),", then ",l.createElement(i.B,null,"UNSAFE_componentWillUpdate()"),",",l.createElement(u.Z,null)," ",l.createElement(i.B,null,"render()")," and ",l.createElement(i.B,null,"componentDidUpdate()")," methods are not invoked."),l.createElement(r.Z,{language:a.r.JSX},"shouldComponentUpdate(nextProps, nextState)"),l.createElement(m.Z,null,"The default behavior is to re-render on every change in ",l.createElement(i.I,null,"state")," or",l.createElement(u.Z,null)," ",l.createElement(i.I,null,"props"),". We can use this method to let React know if the output is not affected by the current change in state or props. React prefers to rely on default behavior in the majority of the cases."),l.createElement(m.Z,null,"It is invoked ",l.createElement(i.B,null,"before rendering")," when ",l.createElement(i.B,null,"new")," ",l.createElement(i.I,null,"props")," or",l.createElement(u.Z,null)," ",l.createElement(i.I,null,"state")," are being received. Defaults to true. This method is not called for the ",l.createElement(i.I,null,"initial render")," or when ",l.createElement(i.I,null,"forceUpdate()"),l.createElement(u.Z,null)," is used."),l.createElement(c.Z,null,"Returning ",l.createElement(i.B,null,"false")," does not prevent child components from re-rendering when ",l.createElement(i.B,null,"their")," state changes."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>L});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(14289),m=n(78146),u=n(67115),i=n(76792),s=n(32209),d=n(41485),h=n(39602),E=n(44680),p=n(85893);const f=(0,h.Z)("h4");f.displayName="DivStyledAsH4";const b=(0,E.Z)("alert-heading",{Component:f}),g=(0,E.Z)("alert-link",{Component:u.Z}),Z={variant:"primary",show:!0,transition:s.Z,closeLabel:"Close alert"},B=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:r,closeVariant:o,className:u,children:h,variant:E,onClose:f,dismissible:b,transition:g,...Z}=(0,c.Ch)(e,{show:"onClose"}),B=(0,i.vE)(n,"alert"),v=(0,m.Z)((e=>{f&&f(!1,e)})),I=!0===g?s.Z:g,w=(0,p.jsxs)("div",{role:"alert",...I?void 0:Z,ref:t,className:a()(u,B,E&&`${B}-${E}`,b&&`${B}-dismissible`),children:[b&&(0,p.jsx)(d.Z,{onClick:v,"aria-label":r,variant:o}),h]});return I?(0,p.jsx)(I,{unmountOnExit:!0,...Z,ref:void 0,in:l,children:w}):l?w:null}));B.displayName="Alert",B.defaultProps=Z;const v=Object.assign(B,{Link:g,Heading:b});var I=n(83819),w=n(93379),y=n.n(w),k=n(7795),U=n.n(k),x=n(90569),D=n.n(x),F=n(3565),S=n.n(F),T=n(19216),C=n.n(T),M=n(44589),O=n.n(M),P=n(11137),W={};W.styleTagTransform=O(),W.setAttributes=S(),W.insert=D().bind(null,"head"),W.domAPI=U(),W.insertStyleElement=C(),y()(P.Z,W),P.Z&&P.Z.locals&&P.Z.locals;var A=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,c=e.variant,m=void 0===c?"primary":c,u=a()((0,l.Z)({},"".concat(I.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},r),o.createElement(v,{key:m,variant:m},t))};const L=(0,o.memo)(A)},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const c=o}}]);