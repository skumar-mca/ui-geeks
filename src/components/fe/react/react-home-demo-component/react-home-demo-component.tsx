import React from 'react';
import useCurrentPath from '../../../../custom-hooks/useCurrentRoute';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { REACT_PRIMARY_ROUTES } from '../react-menu-items';
import ReactHomeDemoBackgroundChange, {
  ReactHomeDemoBackgroundChangeCode
} from './background-change-demo';
import ReactHomeDemoStateUpdate, {
  ReactHomeDemoStateUpdateCode
} from './state-update-demo';

const ReactHomeDemoComponent = () => {
  const current = useCurrentPath();
  const isFullPageDemo = current.indexOf('/demoes/') > -1;

  const demoComponents = [
    {
      id: 1,
      label: 'React state update.',
      component: <ReactHomeDemoStateUpdate />,
      code: ReactHomeDemoStateUpdateCode,
      codeLanguage: CodeLanguageTypes.JSX,
      moreDetail: {
        label: 'Learn more about state updates',
        link: REACT_PRIMARY_ROUTES.STATE
      }
    },
    {
      id: 2,
      label: 'Reactive DOM manipulation.',
      component: <ReactHomeDemoBackgroundChange />,
      code: ReactHomeDemoBackgroundChangeCode,
      codeLanguage: CodeLanguageTypes.JSX,
      moreDetail: {
        label: 'Learn more about DOM manipulation',
        link: REACT_PRIMARY_ROUTES.HOME_PAGE.url
      }
    }
  ];

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={isFullPageDemo ? REACT_PRIMARY_ROUTES.HOME_PAGE.url : undefined}
      homePageLabel={isFullPageDemo ? 'React' : undefined}
    />
  );
};

export default ReactHomeDemoComponent;
