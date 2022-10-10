import { ReactNode } from 'react';

export interface IDemComponentItemType {
  id: number;
  label: string | ReactNode;
  component: ReactNode;
  code: string;
  codeLanguage?: string;
  moreDetail: {
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
