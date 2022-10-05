import { ReactNode } from 'react';

export interface IDemoWrapperProps {
  children: ReactNode | string;
  title?: string | ReactNode;
}
