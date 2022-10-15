"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[2537,6006,7893,6148,9045,6442,7075,7085,4830,5775],{2537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(87398),r=n(68947),c=n(67085),o=n(74830),u=n(25775);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Basic Hooks"),l.createElement(r.Z,null,"Below is the list of commonly used built-in Hooks."),l.createElement(u.default,null),l.createElement(o.default,null),l.createElement(c.default,null))}},67085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),o=n(68947),u=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useContext()"),l.createElement(o.Z,null,"This hook is used to access ",l.createElement(s.B,null,"Context")," values inside the function component."),l.createElement(o.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const value = useContext(ContextObject)")),l.createElement(o.Z,null,l.createElement(s.B,null,"ContextObject"),": It is the React Context object, returned from",l.createElement(s.I,null,"React.createContext()")," method."),l.createElement(o.Z,null,"The ",l.createElement(s.I,null,"useContext()")," Hook accepts a context object ",l.createElement(u.Z,null),l.createElement(s.B,null,'"ContextObject"')," and returns the current context ",l.createElement(s.B,null,"value")," for that context. The current context value is determined by the ",l.createElement(u.Z,null),l.createElement(s.BI,null,"value prop")," of the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>"),l.createElement(u.Z,null)," above the calling component in the tree."),l.createElement(o.Z,null,"When the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>")," updates the",l.createElement(u.Z,null)," ",l.createElement(s.BI,null,"value"),", this Hook will trigger a re-render with the latest context value."),l.createElement(o.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(a.Z,{language:r.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(a.Z,{language:r.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')))}},74830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),o=n(26006),u=n(68947),s=n(12050),i=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useEffect()"),l.createElement(u.Z,null,"The ",l.createElement(i.BI,null,"useEffect")," hook is used to perform ",l.createElement(i.I,null,"side effects")," in",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"function components"),". Side effects can be calling APIs, setting up the subscription, setting timers, etc. By using this hook, we tell React that our component needs to do something after render. React will remember the function and call it later after performing the DOM updates. React guarantees the DOM has been updated by the time it runs the effects."),l.createElement(o.Z,null,"Hooks embrace JavaScript closures to access the function state."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"useEffect(()= >{\n    // body of the side-effects\n\n    // optional return statement\n    return () => {\n        // Unmount statements\n    }\n}, <optional-dependencies-array>)\n")),l.createElement(u.Z,null,l.createElement(i.B,null,"<optional-dependencies-array>"),": This is the optional Array of dependencies, which instructs React, when to call this side-effect. React observes the changes in values of the dependency array items, and will call the side-effect statements, on change of any dependency."),l.createElement(u.Z,null,l.createElement(i.B,null,"return () => { }"),l.createElement(i.cJ,null),l.createElement(i.I,null,"useEffect()")," can optionally return a function, which will be called on component unmount or before running the next effect."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,null,"const Counter = () => {\n    const [counter, setCounter] = useState(0);\n    useEffect(() => {\n        document.title = `Clicked ${counter} times.`;\n        // cleanup activity\n        return () => {\n            document.title = `Clicked 0 times.`;\n        }\n    });\n\n    const handleButtonClick = () => {\n        setCounter((prev) => prev+1);\n    }\n\n    return <div>\n        <span>You clicked {count} times.</span>\n        <button onClick={handleButtonClick}>Click</button>\n    </div>\n}\n")),l.createElement(u.Z,null,"Compared to class component's lifecycle methods, this one hook is equivalent to ",l.createElement(i.BI,null,"componentDidMount()"),", ",l.createElement(s.Z,null),l.createElement(i.BI,null,"componentDidUpdate()")," and ",l.createElement(i.BI,null,"componentWillUnmount()"),l.createElement(s.Z,null)," combined together."),l.createElement(u.Z,null,"Let's learn how ",l.createElement(i.BI,null,"useEffect()")," can be used as ",l.createElement(s.Z,null),l.createElement(i.I,null,"componentDidMount()"),", ",l.createElement(i.I,null,"componentDidUpdate()")," and",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"componentWillUnmount()"),"."),l.createElement(c.Z,{as:"h5"},"As componentDidMount()"),l.createElement(u.Z,null,"Passing ",l.createElement(i.B,null,"empty [] dependency")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidMount()")," and statements will be executed only once."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[ ])")),l.createElement(u.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n    useEffect(() =>{ \n        document.title = "useEffect() equivalent to componentDidUpdate()";\n    }, []);\n\n    return <div>Hello</div>;\n}')),l.createElement(u.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," only once on ",l.createElement(i.B,null,"mount"),"."),l.createElement(c.Z,{as:"h5"},"As componentDidUpdate()"),l.createElement(u.Z,null,l.createElement(i.B,null,"Passing the dependency array")," to ",l.createElement(i.I,null,"useEffect()")," will make it equivalent to ",l.createElement(i.B,null,"componentDidUpdate()")," and statements will be executed on every update to the dependency items."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{ },[dependency1, dependency2,..., dependencyN])")),l.createElement(u.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n    const [name, setName] = useState("");\n    const [age, setAge] = useState(0);\n    const [message, setMessage] = useState("");\n\n    useEffect(() =>{ \n        setMessage(() => `Name: ${name}, age: ${age}`);\n    }, [name, age]);\n\n    return <div>{message}</div>;\n}\n')),l.createElement(u.Z,null,"Above code will call ",l.createElement(i.BI,null,"useEffect()")," on ",l.createElement(i.B,null,"mount")," as well as",l.createElement(s.Z,null)," ",l.createElement(i.B,null,"on change")," in value of ",l.createElement(i.BI,null,'"name"')," or ",l.createElement(i.BI,null,'"age"'),"."),l.createElement(c.Z,{as:"h5"},"As componentWillUnmount()"),l.createElement(u.Z,null,l.createElement(i.I,null,"useEffect()")," optionally returns a ",l.createElement(i.BI,null,"function"),", which is called before running the ",l.createElement(i.I,null,"useEffect()")," again. Returning this",l.createElement(s.Z,null)," ",l.createElement(i.I,null,"function")," along with ",l.createElement(i.B,null,"empty dependency []")," will be equivalent to ",l.createElement(i.B,null,"componentWillUnmount()"),"."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,null,"useEffect(()= >{\n    return () =>{\n        // cleanup statements\n    }\n},[])\n")),l.createElement(u.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const User = () => {\n  useEffect(() =>{ \n    document.title = "useEffect() equivalent to componentDidUpdate()";\n    return () => { \n      document.title = “Default title”;\n    }\n  }, []);\n\n  return <div>Hello</div>;\n}')),l.createElement(o.Z,null,"If useEffect() returns a function with some dependency or without any dependency, in such cases the returned function (cleanup method) will be invoked on every update. This may lead to performance issues, if not used wisely."),l.createElement(o.Z,null,"Unlike componentDidMount() or componentDidUpdate(), effects scheduled with ",l.createElement(i.B,null,"useEffect() don't block the browser from updating the screen"),". This makes the app more responsive. The majority of effects don't need to happen synchronously. In uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect()."))}},25775:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),r=n(91573),c=n(87398),o=n(26006),u=n(68947),s=n(12050),i=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useState()"),l.createElement(u.Z,null,"This Hooks is used to add ",l.createElement(i.B,null,"state")," to a function component.It returns a ",l.createElement(i.B,null,"pair")," - an array with two items. The first item",l.createElement(s.Z,null)," is the ",l.createElement(i.I,null,"current value")," and second is a ",l.createElement(i.I,null,"function"),l.createElement(s.Z,null)," that updates it."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const [stateValue, updateFunction] = useState(initialValue);")),l.createElement(u.Z,null,l.createElement(i.B,null,"stateValue"),": It is the first value of the pair of values returned from the ",l.createElement(i.I,null,"useState()")," hook. This is the name of the state variable. In contrast to the class state, the state of a function can be any valid type. For example, it can be numbers, strings, arrays, etc."),l.createElement(u.Z,null,l.createElement(i.B,null,"updateFunction"),": This is the second value of the pair of values returned from the ",l.createElement(i.I,null,"useState()")," hook. This function is equivalent to",l.createElement(i.I,null,"setState()")," of the class component and used to update the respective state variable."),l.createElement(u.Z,null,l.createElement(i.B,null,"initialValue"),": It is the initial value of the state variable. The initial value is only assigned once, on the mount of the component and is ignored on further update events."),l.createElement(u.Z,null,l.createElement(i.IU,null,"Example:"),l.createElement(i.cJ,null),"Let's build our Counter component using the ",l.createElement(i.B,null,"function component"),l.createElement(s.Z,null)," and ",l.createElement(i.B,null,"useState()")," hook."),l.createElement(a.Z,{language:r.r.JSX},"const Counter = (props) => {\n  const [counter, setCounter] = useState(0);\n  const incrementCounter = () => {\n    setCounter((prevState) => prevState + 1);\n  }\n  return <div>\n    <span>Counter Value: {counter}</span>\n    <button onClick={incrementCounter}>Increment</button>\n  </div>\n}"),l.createElement(c.Z,{as:"h4"},"Functional Updates"),l.createElement(u.Z,null,"If the new state is computed using the previous state value, in such cases we can pass a function to the ",l.createElement(i.B,null,"updateFunction"),". The function will receive the previous state, and return an updated state."),l.createElement(u.Z,null,"In the above code, we used functional updates.",l.createElement(a.Z,{language:r.r.JSX},"setCounter((prevState) => prevState + 1);")),l.createElement(u.Z,null,"Alternative to ",l.createElement(i.I,null,"functional updates")," is to pass a ",l.createElement(i.B,null,"value")," to the ",l.createElement(i.B,null,"updateFunction"),". Because React may batch state updates for performance benefits, therefore this syntax may not provide updated value.",l.createElement(a.Z,{language:r.r.JSX},"setCounter(counter + 1);")),l.createElement(c.Z,{as:"h4"},"Lazy initial state"),l.createElement(u.Z,null,"The ",l.createElement(i.B,null,"initialValue")," argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, we may provide a function instead, which will be executed only on the initial render."),l.createElement(a.Z,{language:r.r.JSX},"const [counter, setCounter]\t = useState(()=>{\n  const initialState = expensiveComputation();\n  return initialState;\n});"),l.createElement(c.Z,{as:"h4"},"Bailing out of a state update"),l.createElement(u.Z,null,"If we update a state Hook to the same value as the current state, React will bail out without rendering the children or firing effects. React uses the ",l.createElement(i.BI,null,"Object.is comparison algorithm")," for comparing values."),l.createElement(c.Z,{as:"h4"},"Batching of state updates"),l.createElement(u.Z,null,"React may group several state updates into a single re-render to improve performance."),l.createElement(u.Z,null,"Before React 18, only updates inside React event handlers were batched. Starting with ",l.createElement(i.B,null,"React 18"),", batching is ",l.createElement(s.Z,null),l.createElement(i.B,null,"enabled for all updates by default"),"."),l.createElement(o.Z,null,"React makes sure that updates from several different user-initiated events, like ",l.createElement(i.B,null,"clicking a button twice"),", are always processed separately and ",l.createElement(i.B,null,"do not get batched"),". This prevents logical mistakes."))}},26006:(e,t,n)=>{n.d(t,{Z:()=>X});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),o=n(14289),u=n(78146),s=n(67115),i=n(76792),m=n(32209),d=n(41485),E=n(39602),h=n(44680),f=n(85893);const p=(0,E.Z)("h4");p.displayName="DivStyledAsH4";const g=(0,h.Z)("alert-heading",{Component:p}),v=(0,h.Z)("alert-link",{Component:s.Z}),Z={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},b=c.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:c,className:s,children:E,variant:h,onClose:p,dismissible:g,transition:v,...Z}=(0,o.Ch)(e,{show:"onClose"}),b=(0,i.vE)(n,"alert"),y=(0,u.Z)((e=>{p&&p(!1,e)})),I=!0===v?m.Z:v,x=(0,f.jsxs)("div",{role:"alert",...I?void 0:Z,ref:t,className:r()(s,b,h&&`${b}-${h}`,g&&`${b}-dismissible`),children:[g&&(0,f.jsx)(d.Z,{onClick:y,"aria-label":a,variant:c}),E]});return I?(0,f.jsx)(I,{unmountOnExit:!0,...Z,ref:void 0,in:l,children:x}):l?x:null}));b.displayName="Alert",b.defaultProps=Z;const y=Object.assign(b,{Link:v,Heading:g});var I=n(83819),x=n(93379),B=n.n(x),w=n(7795),C=n.n(w),k=n(90569),S=n.n(k),U=n(3565),T=n.n(U),R=n(19216),D=n.n(R),J=n(44589),H=n.n(J),L=n(11137),A={};A.styleTagTransform=H(),A.setAttributes=T(),A.insert=S().bind(null,"head"),A.domAPI=C(),A.insertStyleElement=D(),B()(L.Z,A),L.Z&&L.Z.locals&&L.Z.locals;var j=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,o=e.variant,u=void 0===o?"primary":o,s=r()((0,l.Z)({},"".concat(I.HL,"-note"),!0));return c.createElement("div",{className:s},c.createElement("div",{className:"note-text"},a),c.createElement(y,{key:u,variant:u},t))};const X=(0,c.memo)(j)},11137:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}\n",""]);const o=c}}]);