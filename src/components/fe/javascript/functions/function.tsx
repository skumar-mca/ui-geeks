import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSAnonymousFunctions from './anonymous-functions';
import JSFunctionArgumentKeyword from './function-arguments';
import JSFunctionsDeclaration from './function-declaration';
import JSFunctionsExpression from './function-expression';
import JSFunctionIIFE from './function-iife';
import JSFunctionsIntro from './function-intro';
import JSFunctionsInvocation from './function-invocation';
import JSInnerFunctions from './inner-functions';
import JSFunctionRestArgument from './rest-parameters';

const JSFunctions = () => {
  useDOMTitle('YALS: JavaScript | Functions');

  return (
    <Container>
      <Heading>Functions</Heading>

      <Para>
        <JSFunctionsIntro />
        <JSFunctionsDeclaration />
        <JSFunctionsExpression />
        <JSFunctionsInvocation />
        <JSFunctionArgumentKeyword />
        <JSFunctionRestArgument />
        <JSAnonymousFunctions />
        <JSFunctionIIFE />
        <JSInnerFunctions />
      </Para>
    </Container>
  );
};

export default JSFunctions;
