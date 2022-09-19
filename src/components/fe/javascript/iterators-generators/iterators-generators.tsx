import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I } from '../../../shared/util/util';
import JSGenerators from './generators';
import JSIterables from './iterables';
import JSIterators from './iterators';

const JSIteratorsGenerators = () => {
  useDOMTitle('YALS: JavaScript | Iterators and Generators');

  return (
    <Container>
      <Heading>Iterators and Generators</Heading>

      <Para>
        <BI>Iterators</BI> and <BI>generators</BI> bring the concept of
        <Space /> <I>iteration</I> directly into core language and provide a
        mechanism for customizing the behavior of <I>for…of</I> loop.
      </Para>

      <Para>
        <JSIterators />
        <JSGenerators />
        <JSIterables />
      </Para>
    </Container>
  );
};

export default memo(JSIteratorsGenerators);
