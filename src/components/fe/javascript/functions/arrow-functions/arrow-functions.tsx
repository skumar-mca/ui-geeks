import React from 'react';
import useDOMTitle from '../../../../../custom-hooks/use-dom-title';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { NewLine } from '../../../../shared/util/util';
import JSArrowFunctionsParsingOrder from './af-parsing-order';
import JSArrowFunctionsArgumentBinding from './argument-binding';
import JSArrowFunctionsLineBreaks from './arrow-function-line-breaks';
import JSArrowFunctionsIntro from './arrow-functions-intro';
import JSArrowFunctionsAsClassField from './as-class-field';
import JSArrowFunctionsLimitations from './limitations';
import JSArrowFunctionsReturningObject from './returning-object-literal';

const JSArrowFunctions = () => {
  useDOMTitle('YALS: JavaScript | Arrow functions');
  return (
    <Container>
      <Heading>Arrow functions</Heading>
      <Para>
        <JSArrowFunctionsIntro />
        <JSArrowFunctionsLimitations />
        <NewLine />
        <JSArrowFunctionsAsClassField />
        <JSArrowFunctionsArgumentBinding />
        <NewLine />
        <JSArrowFunctionsReturningObject />
        <NewLine />
        <JSArrowFunctionsLineBreaks />
        <NewLine />
        <JSArrowFunctionsParsingOrder />
      </Para>
    </Container>
  );
};

export default JSArrowFunctions;
