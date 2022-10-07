import { ReactNode } from 'react';
import { IBlogMenuType } from '../../fe/javascript/blogs/javascript-blog-content';

export interface ILandingPageWrapperProps {
  linksMenu: Array<any>;
  imagePath: string;
  wordCloudUrl: string;
  title: string;
  children: ReactNode | string;
  blogList?: Array<IBlogMenuType>;
}
