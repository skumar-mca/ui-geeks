import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I, IU, NewLine } from '../../../shared/util/util';

const JSThisWithStaticMembers = () => {
  return (
    <>
      <Heading as='h2'>static Methods and Properties</Heading>
      <Para>
        The <BI>static</BI> keyword defines a <I>static method</I> or <Space />
        <I>property</I> for a <I>class</I>. Static members are called without
        instantiating the <I>class</I> and cannot be called through a <Space />
        <I>class instance</I>. The <I>static</I> methods are often used to
        create utility functions for the <I>class</I>, whereas <I>static</I>
        <Space /> properties are useful for caches, fixed-configuration or any
        other data that don't need to be replicated across <I>class</I>
        <Space /> instances.
      </Para>

      <Code>{`class User {
    // "MINIMUM_AGE" is a static property
    static MINIMUM_AGE = 18;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getUserDetail() { return this.name + " - " + this.age; }
    // "getValidUsers()" is a static method 
    static getValidUsers(userList) {
        return userList.filter(usr => usr.age > this.MINIMUM_AGE);
    }
}
`}</Code>

      <Para>
        <IU>Example 1:</IU>
        <Code>
          {`const usr = new User("John", 25);
usr.getUserDetail();	// "John - 25"`}
        </Code>
      </Para>

      <NewLine />
      <Para>
        <IU>Example 2:</IU>
        <Para>
          In below example, <BI>getValidUsers()</BI> is called on the
          <BI>User class</BI> and not on the instance of the class, like
          <BI>usr</BI>.
        </Para>
        <Code>
          {`const usr = new User("John", 25);
const usr2 = new User("Jack", 17);
const validUsers = User.getValidUsers([usr, usr2]);
console.log(validUsers) // [{ name : "John", age : 25}]
`}
        </Code>
      </Para>

      <NewLine />
      <Para>
        <IU>Example 3:</IU>
        <Para>
          Below example prints <I>"undefined"</I>, because <I>static</I> members
          can't be accessed by instance variables.
        </Para>
        <Code>
          {`const usr = new User("John", 25);
console.log(usr2.MINIMUM_AGE);	// undefined
`}
        </Code>
      </Para>

      <Heading as='h3'>
        Binding "this" with prototype and static methods
      </Heading>

      <Para>
        When a <I>static</I> or <I>prototype/instance</I> methods are called
        without a value of <BI>this</BI>, the value of <BI>this</BI> will be
        <BI>undefined</BI> inside the method.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Code>
          {`const usr = new User("John", 25);
usr.getUserDetail()	// "John - 25"
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Para>
          Below code will throw TypeError, because <BI>this</BI> was
          <BI>undefined</BI> in the method.
        </Para>
        <Code>
          {`const getUserInfo = usr.getUserDetail();
getUserInfo();  // "TypeError: Cannot read properties of undefined"
`}
        </Code>
      </Para>
    </>
  );
};

export default JSThisWithStaticMembers;
