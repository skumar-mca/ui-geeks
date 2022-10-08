import React from 'react';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { REACT_PRIMARY_ROUTES } from '../react-menu-items';
import ReactHomeDemoStateUpdate, {
  ReactHomeDemoStateUpdateCode
} from './state-update-demo';

const ReactHomeDemoComponent = () => {
  const demoComponents = [
    {
      id: 1,
      label: 'React state update.',
      component: <ReactHomeDemoStateUpdate />,
      code: ReactHomeDemoStateUpdateCode,
      codeLanguage: CodeLanguageTypes.JSX
    }
  ];

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={REACT_PRIMARY_ROUTES.HOME_PAGE.url}
      homePageLabel='React'
    />
  );
};

export default ReactHomeDemoComponent;
