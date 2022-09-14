import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I } from '../../../shared/util/util';
import JSValueOfThis from './value-of-this/value-of-this';
const JSThis = () => {
  useDOMTitle('YALS: JavaScript | The "this" keyword');

  return (
    <Container>
      <Heading>The "this" keyword</Heading>
      <Para>
        In most cases, the value of <BI>this</BI> is determined by how a
        function is called <I>(runtime binding)</I>. It can't be set by the
        assignment during execution and it may be different each time the
        function is called.
      </Para>

      <Para>
        <JSValueOfThis />
      </Para>
    </Container>
  );
};

export default JSThis;
