import { ReactNode } from 'react';

export interface IDemComponentItemType {
  id: number;
  label: string | ReactNode;
  component: ReactNode;
  code: string;
  codeLanguage?: string;
}
export interface IDemoWrapperProps {
  demoComponentList: Array<IDemComponentItemType>;
}

export const DemoViewType = {
  VIEW: 'view',
  CODE: 'code'
};
