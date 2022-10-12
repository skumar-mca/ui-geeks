import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
const routePrefix = '/react/';
export const REACT_ROUTE_PATH: Array<IMenuItem> = [
  {
    url: `${routePrefix}introduction`,
    label: 'Introduction'
  },
  {
    url: `${routePrefix}jsx`,
    label: 'JSX'
  },
  {
    url: `${routePrefix}components`,
    label: 'Components'
  },
  {
    url: `${routePrefix}class-component`,
    label: 'Class Component'
  },
  {
    url: `${routePrefix}function-component`,
    label: 'Function Component'
  },
  {
    url: `${routePrefix}controlled-component`,
    label: 'Controlled Component'
  },
  {
    url: `${routePrefix}uncontrolled-component`,
    label: 'Uncontrolled Component'
  },
  {
    url: `${routePrefix}fragments`,
    label: 'Fragments'
  },
  {
    url: `${routePrefix}lists`,
    label: 'Lists'
  },
  {
    url: `${routePrefix}forms`,
    label: 'Forms'
  },
  {
    url: `${routePrefix}hooks`,
    label: 'Hooks'
  },
  {
    url: `${routePrefix}context`,
    label: 'Context'
  },
  {
    url: `${routePrefix}render-props`,
    label: 'Render Props'
  },
  {
    url: `${routePrefix}error-boundary`,
    label: 'Error Boundary'
  }
];

export const REACT_PRIMARY_ROUTES = {
  HOME_PAGE: { url: '/react-home', label: 'React' },
  STATE: `${routePrefix}function-component`,
  DEMO: {
    url: '/demoes/react',
    label: 'React Demoes'
  }
};
