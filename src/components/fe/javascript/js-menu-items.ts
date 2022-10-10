import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';

const routePrefix = '/fe/javascript/';
export const JS_ROUTE_PATH: Array<IMenuItem> = [
  {
    url: `${routePrefix}introduction`,
    label: 'Introduction'
  },
  {
    url: `${routePrefix}history`,

    label: 'History'
  },
  {
    url: `${routePrefix}include-code`,
    label: 'Including Scripts'
  },
  {
    url: `${routePrefix}console`,
    label: 'Console'
  },
  {
    url: `${routePrefix}data-types`,
    label: 'Data types'
  },
  {
    url: `${routePrefix}grammer`,

    label: 'Grammer and Types'
  },
  {
    url: `${routePrefix}operators`,
    label: 'Operators'
  },
  {
    url: `${routePrefix}control-structures`,
    label: 'Control Structures'
  },
  {
    url: `${routePrefix}objects`,
    label: 'Objects'
  },
  {
    url: `${routePrefix}arrays`,
    label: 'Arrays'
  },
  {
    url: `${routePrefix}functions`,
    label: 'Functions'
  },
  {
    url: `${routePrefix}closures`,
    label: 'Closures'
  },
  {
    url: `${routePrefix}arrow-functions`,
    label: 'Arrow Functions'
  },
  {
    url: `${routePrefix}modules`,
    label: 'Modules'
  },
  {
    url: `${routePrefix}this-keyword`,
    label: 'this Keyword'
  },
  {
    url: `${routePrefix}class-keyword`,
    label: 'Class'
  },
  {
    url: `${routePrefix}prototype-chain`,
    label: 'Prototype Chain'
  },
  {
    url: `${routePrefix}strict-mode`,
    label: 'Strict Mode'
  },
  {
    url: `${routePrefix}hoisting`,
    label: 'Hoisting'
  },
  {
    url: `${routePrefix}exception-handling`,
    label: 'Exception Handling'
  },
  {
    url: `${routePrefix}iterators-and-generators`,
    label: 'Iterators and Generators'
  }
];

export const JS_PRIMARY_ROUTES = {
  HOME_PAGE: { url: '/fe/javascript-home', label: 'React' },
  ARRAY: `${routePrefix}arrays`,
  STRING: `${routePrefix}data-types?qtext=String`,
  DEMO: {
    url: 'fe/demoes/javascript',
    label: 'JavaScript Demoes'
  }
};
