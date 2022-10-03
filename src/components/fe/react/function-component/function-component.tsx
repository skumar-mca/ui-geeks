import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactFunctionComponentLifeCycle from './function-comp-lifecycle/function-lifecycle';
import ReactFunctionComponentIntro from './function-component-intro';
import ReactStateAddToFunction from './state-with-function';

const ReactFunctionComponents = () => {
  useDOMTitle('YALS: React | Class Component');

  return (
    <Container>
      <Heading>Function Component</Heading>
      <ReactFunctionComponentIntro />
      <ReactStateAddToFunction />
      <ReactFunctionComponentLifeCycle />
    </Container>
  );
};

export default ReactFunctionComponents;
