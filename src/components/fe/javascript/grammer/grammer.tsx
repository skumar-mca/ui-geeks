import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import { GrammerQuestions } from '../questionnaires/grammer-questionnaire';
import JSComments from './comments';
import JSGrammerIntro from './grammer-intro';
import JSTDZ from './tdz';
import JSVariables from './variables';

const JSGrammer = () => {
  useDOMTitle('UI-Geeks: JavaScript | Grammer and types');

  return (
    <Container>
      <Heading>Grammar and types</Heading>

      <JSGrammerIntro />
      <JSComments />
      <JSVariables />
      <JSTDZ />

      <Para>
        <YALSQuestionaire questions={GrammerQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSGrammer);
