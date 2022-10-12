import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';
import ReactCRA from './cra';
import ReactDefinition from './definition';
import ReactHelloWorld from './hello-world';
import ReactKeyFeatures from './key-features';
import ReactTimeline from './react-timeline';
import ReactTrends from './react-trends';
import ReactVirtualDOM from './virtual-dom';

const ReactIntroduction = () => {
  useDOMTitle('UI-Geeks: React | Introduction');

  return (
    <Container>
      <Heading>Introduction</Heading>

      <Para>
        <ReactDefinition />
        <ReactKeyFeatures />
        <ReactVirtualDOM />
        <ReactTimeline />

        <NewLine />
        <NewLine />
        <ReactCRA />
        <ReactHelloWorld />
        <ReactTrends />
      </Para>
    </Container>
  );
};

export default ReactIntroduction;
