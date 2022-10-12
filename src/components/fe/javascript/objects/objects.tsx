import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSAccessingObjects from './accessing-objects';
import JSObjectsIntro from './objects-intro';

const JSObjects = () => {
  useDOMTitle('UI-Geeks: JavaScript | Objects');

  return (
    <Container>
      <Heading>Objects</Heading>

      <Para>
        <JSObjectsIntro />
        <JSAccessingObjects />
      </Para>
    </Container>
  );
};

export default memo(JSObjects);
