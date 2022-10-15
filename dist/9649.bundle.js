"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[9649,1214,9206,1224,4464,120,9796,6544,9399,8630],{71214:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"constructor"),l.createElement(r.Z,null,"The ",l.createElement(u.I,null,"constructor")," method is a special method for creating and initializing an object created with a ",l.createElement(u.I,null,"class"),". There can be only one special method with the name ",l.createElement(u.B,null,'"constructor"')," in a ",l.createElement(u.I,null,"class"),". A ",l.createElement(u.I,null,"constructor")," can use ",l.createElement(u.BI,null,"super")," ",l.createElement(c.Z,null)," keyword to call the ",l.createElement(u.I,null,"constructor")," of the ",l.createElement(u.I,null,"base/super")," class."),l.createElement(a.Z,null,"class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n}\n"))}},19206:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var l=n(67294),a=n(81391),s=n(87398);const r=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"Class Declaration"),l.createElement(a.Z,null,'class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  showName(){\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}\n'))}},71224:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"Class Expression"),l.createElement(r.Z,null,"Class expressions can be named or unnamed."),l.createElement(u.IU,null,"Example of named class expression:"),l.createElement(a.Z,null,"const User = class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  showName(){\n    console.log(this.firstName + “-” + this.lastName);\n  }\n}\n"),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example of unnamed class expression:"),l.createElement(a.Z,null,'const User = class {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  showName(){\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}\n')),l.createElement(r.Z,null,"Class definition is ",l.createElement(u.BI,null,"not hoisted"),", which means ",l.createElement(u.I,null,"class")," must be defined before they are constructed with the ",l.createElement(u.BI,null,"new")," operator."),l.createElement(a.Z,null,'const usr = new User("JavaScript", "Language"); // Reference Error\nclass User { /*.......... */ }\n'),l.createElement(u.cJ,null),l.createElement(r.Z,null,"The body of a class is executed in ",l.createElement(u.BI,null,"strict mode"),", therefore, all restrictions of ",l.createElement(u.I,null,"strict mode")," are applicable to the ",l.createElement(u.BI,null,"class"),l.createElement(c.Z,null)," body."))}},54464:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167),m=[{label:"Can only be accessed inside the class."},{label:"Can't be inherited"}],i=[{label:l.createElement(l.Fragment,null,"Are only accessible on the class itself or in ",l.createElement(u.BI,null,"this"),l.createElement(c.Z,null)," context of static members.")},{label:"Can't be inherited"}];const o=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"Private field declarations"),l.createElement(r.Z,null,"Private class members can be created by using ",l.createElement(u.B,null,'"#"')," prefix. The privacy encapsulation of these class features is enforced by JavaScript itself. The ",l.createElement(u.B,null,"#")," is a part of the member name. Private fields can't be neither declared nor deleted inside the constructor. It is a syntax error to access private members outside the class. Also private members can't be inherited."),l.createElement(r.Z,null,"Private instance/prototype members:",l.createElement(u.GS,{items:m})),l.createElement(r.Z,null,"Private static members:",l.createElement(u.GS,{items:i})),l.createElement(r.Z,null,l.createElement(a.Z,null,'class User {\n    // "#GROUP" is a private property\n    #GROUP = "Student";\n    static MINIMUM_AGE = 18;\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n\n        delete this.#GROUP;\n        this.#privatePropInConstructor = 10;\n        /* If we try to delete or declare new private properties \n            inside the constructor, it will throw an error.\n        */\n    }\n\n    // "#getUserDetail()" is a private method\n    #getUserDetail() { return this.name + " - " + this.age; }\n    getUserInfo() { return this.#GROUP + ":" + this.#getUserDetail(); }\n}\n'),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 1:"),l.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserInfo();  // "Student: John - 25"\n')),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 2:"),l.createElement(u.cJ,null),"Below code will throw error:",l.createElement(u.B,null,'"SyntaxError: Private field #GROUP must be declared in an enclosing class"'),", because ",l.createElement(u.I,null,"private members")," can't be accessed outside the class.",l.createElement(a.Z,null,"console.log(User.#GROUP);"))))}},49649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var l=n(67294),a=n(9231),s=n(59044),r=n(87398),c=n(68947),u=n(9167),m=n(71214),i=n(19206),o=n(71224),E=n(54464),h=n(10120),d=n(49399),f=n(88630),I=[{label:"Class Declaration"},{label:"Class Expression"}],p=function(){return(0,a.Z)("UI-Geeks: JavaScript | Class"),l.createElement(s.Z,null,l.createElement(r.Z,null,"Class"),l.createElement(c.Z,null,"The classes are templates for creating objects. They encapsulate data with methods to work on that data. Classes in fact are special functions."),l.createElement(c.Z,null,"Classes can be defined in two ways:",l.createElement(u.GS,{items:I})),l.createElement(c.Z,null,l.createElement(i.default,null),l.createElement(o.default,null),l.createElement(m.default,null),l.createElement(d.default,null),l.createElement(f.default,null),l.createElement(E.default,null)),l.createElement(c.Z,null,l.createElement(h.default,null)))};const Z=(0,l.memo)(p)},9796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,null,"The ",l.createElement(u.BI,null,"extends")," ",l.createElement(u.I,null,"keyword")," is used to create a ",l.createElement(u.I,null,"class")," as a child of another ",l.createElement(u.I,null,"class"),", this mechanism is called",l.createElement(u.B,null,"inheritance"),". If there's a",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"constructor")," present in the subclass, it needs to first call ",l.createElement(u.I,null,"super()"),l.createElement(c.Z,null)," before using ",l.createElement(u.BI,null,"this"),"."),l.createElement(r.Z,null,l.createElement(s.Z,{as:"h3"},"Base/Parent/Inherited Class"),l.createElement(r.Z,null,"This is the ",l.createElement(u.I,null,"class")," which will be used as a base for creating child",l.createElement(u.I,null,"classes"),". The basic role of ",l.createElement(u.BI,null,"base class")," is to contain",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"common functionalities"),", which can be used by",l.createElement(u.BI,null,"multiple child classes"),"."),l.createElement(a.Z,null,"class Vehicle {\n  constructor(vehicleType, make, wheels) {\n    this.vehicleType = vehicleType;\n    this.make = make;\n    this.wheels = wheels;\n  }\n\n  showVehicleInfo() { \t\n    console.log(`${this.make} ${this.vehicleType} have ${this.wheels} wheels`);\n  }\n}\n")),l.createElement(r.Z,null,l.createElement(s.Z,{as:"h3"},"Child/Derived Class"),l.createElement(r.Z,null,"This is the ",l.createElement(u.I,null,"class")," which ",l.createElement(u.BI,null,"extends")," the functionality of the ",l.createElement(u.I,null,"base class"),". The role of a ",l.createElement(u.I,null,"derived class")," is to perform more specialized tasks. Derived ",l.createElement(u.I,null,"class"),l.createElement(u.B,null,"uses/overrides")," the ",l.createElement(u.I,null,"base class")," members, based on the need."),l.createElement(r.Z,null,l.createElement(u.BI,null,"super()"),": Calling ",l.createElement(u.I,null,"super()")," is important. It calls the parent class ",l.createElement(u.I,null,"constructor")," with the list of passed ",l.createElement(c.Z,null),l.createElement(u.I,null,"arguments"),". The ",l.createElement(u.BI,null,"super")," can also be used to call",l.createElement(u.B,null,"public")," ",l.createElement(u.I,null,"properties/methods")," of the parent ",l.createElement(u.I,null,"class"),"."),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 1:"),l.createElement(r.Z,null,"In below example, the ",l.createElement(u.BI,null,"showVehicleInfo()")," is not defined in",l.createElement(u.BI,null,"Bike class"),", but still this works, because it was ",l.createElement(c.Z,null),l.createElement(u.I,null,"inherited")," from the base class ",l.createElement(u.BI,null,"Vehicle"),"."),l.createElement(a.Z,null,'class Bike extends Vehicle {\n  constructor(make) {\n    super("Bike, make, 2);\n  }\n}\n\nconst bike = new Bike("Honda");\nbike.showVehicleInfo()  // "Honda Bike have 2 wheels"')),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 2:"),l.createElement(r.Z,null,"In below example, the ",l.createElement(u.BI,null,"showVehicleInfo()")," is not defined in",l.createElement(u.BI,null,"Car class"),", but still this works, because it was ",l.createElement(c.Z,null),l.createElement(u.I,null,"inherited")," from the base class ",l.createElement(u.BI,null,"Vehicle"),"."),l.createElement(a.Z,null,'class Car extends Vehicle {\n  constructor(make) {\n    super("Car", make, 4);\n  }\n}\n\nconst car = new Car("Maruti");\ncar.showVehicleInfo() // "Maruti Car have 4 wheels"'))))}},10120:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(87398),s=n(68947),r=n(9796),c=n(36544);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Inheritance"),l.createElement(s.Z,null,l.createElement(r.default,null),l.createElement(c.default,null)))}},36544:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"MIX-INS"),l.createElement(r.Z,null,l.createElement(u.B,null,"Abstract classes")," or ",l.createElement(u.B,null,"mix-ins")," are templates for classes. Class inheritance has a limitation that a ",l.createElement(u.I,null,"class")," can only",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"extend")," one ",l.createElement(u.I,null,"class"),". A function with a super class as input and a subclass extending that superclass as output can be used to implement ",l.createElement(u.I,null,"mix-ins")," in JavaScript."),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example:"),l.createElement(a.Z,null,"class BaseClass { \n  constructor(numArr) {\n    this.numArr = numArr;\n  }\n}\n"),l.createElement(a.Z,null,"const sumMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  sum() { return this.numArr.reduce((a, b) => a + b); }\n};"),l.createElement(a.Z,null,"const averageMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  average() { \n    return this.numArr.reduce((a, b) => a + b) / this.numArr.length; \n  }\n};\n"),l.createElement(a.Z,null,"class MathClass extends sumMixin(averageMixin(BaseClass)) { }\nconst math = new MathClass([2, 5, 6, 8]);\nmath.sum(); // 21\nmath.average(); // 5.25")))}},49399:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"static Methods and Properties"),l.createElement(r.Z,null,"The ",l.createElement(u.BI,null,"static")," keyword defines a ",l.createElement(u.I,null,"static method")," or ",l.createElement(c.Z,null),l.createElement(u.I,null,"property")," for a ",l.createElement(u.I,null,"class"),". Static members are called without instantiating the ",l.createElement(u.I,null,"class")," and cannot be called through a ",l.createElement(c.Z,null),l.createElement(u.I,null,"class instance"),". The ",l.createElement(u.I,null,"static")," methods are often used to create utility functions for the ",l.createElement(u.I,null,"class"),", whereas ",l.createElement(u.I,null,"static"),l.createElement(c.Z,null)," properties are useful for caches, fixed-configuration or any other data that don't need to be replicated across ",l.createElement(u.I,null,"class"),l.createElement(c.Z,null)," instances."),l.createElement(a.Z,null,'class User {\n  // "MINIMUM_AGE" is a static property\n  static MINIMUM_AGE = 18;\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  getUserDetail() { return this.name + " - " + this.age; }\n  // "getValidUsers()" is a static method \n  static getValidUsers(userList) {\n    return userList.filter(usr => usr.age > this.MINIMUM_AGE);\n  }\n}\n'),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 1:"),l.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserDetail();  // "John - 25"')),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 2:"),l.createElement(r.Z,null,"In below example, ",l.createElement(u.BI,null,"getValidUsers()")," is called on the",l.createElement(u.BI,null,"User class")," and not on the instance of the class, like",l.createElement(u.BI,null,"usr"),"."),l.createElement(a.Z,null,'const usr = new User("John", 25);\nconst usr2 = new User("Jack", 17);\nconst validUsers = User.getValidUsers([usr, usr2]);\nconsole.log(validUsers) // [{ name : "John", age : 25}]\n')),l.createElement(r.Z,null,l.createElement(u.IU,null,"Example 3:"),l.createElement(r.Z,null,"Below example prints ",l.createElement(u.I,null,'"undefined"'),", because ",l.createElement(u.I,null,"static")," members can't be accessed by instance variables."),l.createElement(a.Z,null,'const usr = new User("John", 25);\nconsole.log(usr2.MINIMUM_AGE);  // undefined\n')))}},88630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(81391),s=n(87398),r=n(68947),c=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h3"},'Binding "this" with prototype and static methods'),l.createElement(r.Z,null,"When a ",l.createElement(c.I,null,"static")," or ",l.createElement(c.I,null,"prototype/instance")," methods are called without a value of ",l.createElement(c.BI,null,"this"),", the value of ",l.createElement(c.BI,null,"this")," will be",l.createElement(c.BI,null,"undefined")," inside the method."),l.createElement(r.Z,null,l.createElement(c.IU,null,"Example 1:"),l.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserDetail()\t// "John - 25"\n')),l.createElement(r.Z,null,l.createElement(c.IU,null,"Example 2:"),l.createElement(r.Z,null,"Below code will throw TypeError, because ",l.createElement(c.BI,null,"this")," was",l.createElement(c.BI,null,"undefined")," in the method."),l.createElement(a.Z,null,'const getUserInfo = usr.getUserDetail();\ngetUserInfo();  // "TypeError: Cannot read properties of undefined"\n')))}}}]);