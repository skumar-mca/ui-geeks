import React from 'react';
import useDOMTitle from '../../../../../custom-hooks/use-dom-title';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import JSClosureScopeChain from './closure-scope-chain';
import JSClosuresInLoop from './closures-in-loop';
import JSFunctionClosuresIntro from './closures-intro';
import JSFunctionClosureUseCases from './closures-use-cases';

const JSFunctionClosures = () => {
  useDOMTitle('YALS: JavaScript | Closures');
  return (
    <Container>
      <Heading>Closures</Heading>
      <Para>
        <JSFunctionClosuresIntro />
        <JSFunctionClosureUseCases />
        <JSClosureScopeChain />
        <JSClosuresInLoop />
      </Para>
    </Container>
  );
};

export default JSFunctionClosures;
