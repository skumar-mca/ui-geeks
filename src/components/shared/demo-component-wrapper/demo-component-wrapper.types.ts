import { ReactNode } from 'react';
import { IYalsTabType } from '../yals-tabs/yals-tabs.types';

export interface IDemComponentItemType {
  id: number;
  label?: string | ReactNode;
  codeLanguage?: string;
  tabs: Array<IYalsTabType>;
  moreDetail?: {
    label: string | ReactNode;
    link: string;
  };
}
export interface IDemoWrapperProps {
  demoComponentList: Array<IDemComponentItemType>;
  homePage?: string;
  homePageLabel?: string;
}

export const DemoViewType = {
  VIEW: 'view',
  CODE: 'code'
};
