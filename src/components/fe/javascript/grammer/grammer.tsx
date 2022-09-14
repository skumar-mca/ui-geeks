import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import JSComments from './comments';
import JSGrammerIntro from './grammer-intro';
import JSTDZ from './tdz';
import JSVariables from './variables';

const JSGrammer = () => {
  useDOMTitle('YALS: JavaScript | Grammer and types');

  return (
    <Container>
      <Heading>Grammar and types</Heading>

      <JSGrammerIntro />
      <JSComments />
      <JSVariables />
      <JSTDZ />
    </Container>
  );
};

export default JSGrammer;
