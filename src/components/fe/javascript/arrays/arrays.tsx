import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSAccessingArrays from './accessing-arrays';
import JSArrayMethods from './array-methods';
import JSArraysIntro from './arrays-intro';

const JSArrays = () => {
  useDOMTitle('YALS: JavaScript | Objects');

  return (
    <Container>
      <Heading>Arrays</Heading>

      <Para>
        <JSArraysIntro />
        <JSAccessingArrays />
        <JSArrayMethods />
      </Para>
    </Container>
  );
};

export default JSArrays;
