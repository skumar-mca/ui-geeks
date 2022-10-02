import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
const routePrefix = '/fe/react/';
export const ReactMenuItems: Array<IMenuItem> = [
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
    url: `${routePrefix}component-lifecycle`,
    label: 'Component Lifecycle'
  },
  {
    url: `${routePrefix}forms`,
    label: 'Forms'
  },
  {
    url: `${routePrefix}lists`,
    label: 'Lists'
  },
  {
    url: `${routePrefix}context`,
    label: 'Context'
  },
  {
    url: `${routePrefix}error-boundary`,
    label: 'Error Boundary'
  },
  {
    url: `${routePrefix}fragments`,
    label: 'Fragments'
  },
  {
    url: `${routePrefix}hooks`,
    label: 'Hooks'
  }
];
