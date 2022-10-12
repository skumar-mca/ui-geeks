import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSIfElse from './conditional-statements/if-else/if-else';
import JSSwitchCase from './conditional-statements/if-else/switch-case';
import JSControlStructuresIntro from './control-structures-intro';
import JSLoops from './loop-statements/loop-statements';

const JSControlStructures = () => {
  useDOMTitle('UI-Geeks: JavaScript | Control Structures');

  return (
    <Container>
      <Heading>Control Structures</Heading>

      <JSControlStructuresIntro />

      <Para>
        <Heading as='h2'>Conditional Statements</Heading>
        <JSIfElse />
        <JSSwitchCase />
      </Para>

      <Para>
        <JSLoops />
      </Para>
    </Container>
  );
};

export default memo(JSControlStructures);
