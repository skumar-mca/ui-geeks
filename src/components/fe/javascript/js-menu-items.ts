import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';

export const JS_routePrefix = '/javascript/';
export const JS_ROUTE_PATH: Array<IMenuItem> = [
  {
    url: `${JS_routePrefix}introduction`,
    label: 'Introduction'
  },
  {
    url: `${JS_routePrefix}history`,

    label: 'History'
  },
  {
    url: `${JS_routePrefix}include-code`,
    label: 'Including Scripts'
  },
  {
    url: `${JS_routePrefix}console`,
    label: 'Console'
  },
  {
    url: `${JS_routePrefix}data-types`,
    label: 'Data types'
  },
  {
    url: `${JS_routePrefix}grammer`,

    label: 'Grammer and Types'
  },
  {
    url: `${JS_routePrefix}operators`,
    label: 'Operators'
  },
  {
    url: `${JS_routePrefix}control-structures`,
    label: 'Control Structures'
  },
  {
    url: `${JS_routePrefix}objects`,
    label: 'Objects'
  },
  {
    url: `${JS_routePrefix}arrays`,
    label: 'Arrays'
  },
  {
    url: `${JS_routePrefix}functions`,
    label: 'Functions'
  },
  {
    url: `${JS_routePrefix}closures`,
    label: 'Closures'
  },
  {
    url: `${JS_routePrefix}arrow-functions`,
    label: 'Arrow Functions'
  },
  {
    url: `${JS_routePrefix}modules`,
    label: 'Modules'
  },
  {
    url: `${JS_routePrefix}this-keyword`,
    label: 'this Keyword'
  },
  {
    url: `${JS_routePrefix}class-keyword`,
    label: 'Class'
  },
  {
    url: `${JS_routePrefix}prototype-chain`,
    label: 'Prototype Chain'
  },
  {
    url: `${JS_routePrefix}strict-mode`,
    label: 'Strict Mode'
  },
  {
    url: `${JS_routePrefix}hoisting`,
    label: 'Hoisting'
  },
  {
    url: `${JS_routePrefix}exception-handling`,
    label: 'Exception Handling'
  },
  {
    url: `${JS_routePrefix}iterators-and-generators`,
    label: 'Iterators and Generators'
  }
];

export const JS_PRIMARY_ROUTES = {
  HOME_PAGE: { url: '/javascript/home', label: 'React' },
  ARRAY: `${JS_routePrefix}arrays`,
  STRING: `${JS_routePrefix}data-types?qtext=String`,
  DEMO: {
    url: 'javascript/demoes',
    label: 'JavaScript Demoes'
  }
};
