import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import ReactListExample from './list-example';
import ReactListKeys from './list-keys';
import ReactListsIntro from './lists-intro';

const ReactLists = () => {
  useDOMTitle('UI-Geeks: React | Lists');

  return (
    <Container>
      <Heading>Lists</Heading>
      <ReactListsIntro />
      <ReactListKeys />
      <ReactListExample />
    </Container>
  );
};

export default ReactLists;
