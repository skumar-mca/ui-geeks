import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I } from '../../../shared/util/util';
import JSInheritingProperties from './inheriting-properties';
import JSPrototypeWithConstructor from './prototype-with-constructor';
import JSPrototypeWithCreate from './prototype-with-create';
import JSPrototypeWithSetPrototypeOf from './prototype-with-setPrototypeOf';

const JSPrototypeChain = () => {
  useDOMTitle('YALS: JavaScript | Inheritance and the Prototype chain');

  return (
    <Container>
      <Heading>Inheritance and the Prototype chain</Heading>
      <Para>
        When it comes to <I>inheritance</I>, JavaScript has only one construct:
        <BI>Objects</BI>. Each <I>object</I> has a <I>private property</I> which
        holds a link to another object called its <BI>prototype</BI>. The
        <Space /> <I>prototype</I> object has a <I>prototype</I> of its own, and
        so on until an object is reached with <BI>null</BI> as its
        <I>prototype</I>. By definition, <BI>null</BI> has no <I>prototype</I>
        and acts as the final link in the <BI>prototype chain</BI>. <Space />
        <I>Classes</I> also use the same <I>inheritance</I> mechanism under the
        hood.
      </Para>

      <Para>
        <JSInheritingProperties />
        <JSPrototypeWithConstructor />
        <JSPrototypeWithSetPrototypeOf />
        <JSPrototypeWithCreate />
      </Para>
    </Container>
  );
};

export default JSPrototypeChain;
