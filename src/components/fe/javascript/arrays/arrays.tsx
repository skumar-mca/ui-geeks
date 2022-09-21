import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import { ArrayQuestions } from '../questionnaires/array-questionnaire';
import JSAccessingArrays from './accessing-arrays';
import JSArrayMethods from './array-methods';
import JSArraysIntro from './arrays-intro';

const JSArrays = () => {
  useDOMTitle('YALS: JavaScript | Arrays');

  return (
    <Container>
      <Heading>Arrays</Heading>

      <Para>
        <JSArraysIntro />
        <JSAccessingArrays />
        <JSArrayMethods />
      </Para>

      <Para>
        <YALSQuestionaire questions={ArrayQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSArrays);
