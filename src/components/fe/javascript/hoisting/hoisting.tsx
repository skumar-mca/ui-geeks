import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import JSClassHoisting from './class-hoisting';
import JSFunctionHoisting from './function-hoisting';
import JSVariableHoisting from './variable-hoisting';

const JSHoisting = () => {
  useDOMTitle('UI-Geeks: JavaScript | Hoisting');

  return (
    <Container>
      <Heading>Hoisting</Heading>

      <Para>
        JavaScript <B>hoisting</B> refers to the process whereby the <Space />
        <I>interpreter</I> appears to move the declaration of <I>functions</I>,
        <Space /> <I>variables</I> or <I>classes</I> to the top of their scope,
        prior to the execution of the code.
      </Para>

      <Para>
        <JSFunctionHoisting />
        <JSVariableHoisting />
        <JSClassHoisting />
      </Para>
    </Container>
  );
};

export default memo(JSHoisting);
