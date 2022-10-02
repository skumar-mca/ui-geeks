import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactBasicHooks from './basic-hooks';
import ReactHooksIntro from './hooks-intro';

const ReactHooks = () => {
  useDOMTitle('YALS: React | Hooks');
  return (
    <Container>
      <Heading>Hooks</Heading>
      <ReactHooksIntro />
      <ReactBasicHooks />
    </Container>
  );
};

export default ReactHooks;
