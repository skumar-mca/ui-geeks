import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactContextAPI from './context-api/context-api';
import ReactContextIntro from './context-intro';
import ReactContextWhenToUse from './context-when-to-use';

const ReactContext = () => {
  useDOMTitle('UI-Geeks: React | Context');

  return (
    <Container>
      <Heading>Context</Heading>
      <ReactContextIntro />
      <ReactContextWhenToUse />
      <ReactContextAPI />
    </Container>
  );
};

export default ReactContext;
