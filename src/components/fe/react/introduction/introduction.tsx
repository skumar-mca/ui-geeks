import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import ReactCRA from './cra';
import ReactDefinition from './definition';
import ReactHelloWorld from './hello-world';

const ReactIntroduction = () => {
  useDOMTitle('YALS: React | Introduction');

  return (
    <Container>
      <Heading>Introduction</Heading>

      <Para>
        <ReactDefinition />
        <ReactCRA />
        <ReactHelloWorld />
      </Para>
    </Container>
  );
};

export default ReactIntroduction;
