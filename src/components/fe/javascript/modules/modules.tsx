import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import JSModulesExport from './export-statement/export-statement';
import JSModulesImport from './import-statement/import-statement';
import JSModulesIntro from './modules-intro';

const JSModules = () => {
  useDOMTitle('YALS: JavaScript | Modules');

  return (
    <Container>
      <Heading>JavaScript Modules</Heading>
      <Para>
        <JSModulesIntro />
        <JSModulesExport />
        <JSModulesImport />
      </Para>
    </Container>
  );
};

export default memo(JSModules);
