import { ReactNode } from 'react';

export interface ILandingPageWrapperProps {
  linksMenu: Array<any>;
  imagePath: string;
  wordCloudUrl: string;
  title: string;
  children: ReactNode | string;
}
