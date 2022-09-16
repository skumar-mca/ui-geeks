import { ReactNode } from 'react';

export interface ILanguageCarousalItemType {
  content: ReactNode | string;
}

export interface ILanguageProp {
  title: ReactNode | string;
  tag: ReactNode | string;
  contentList: Array<ILanguageCarousalItemType>;
  imagePath?: string;
  homePagePath: string;
  theme: string;
}
