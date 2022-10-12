import { IBlogContentType, JS_BLOG_CONTENT } from './javascript-blog-content';

const routePrefix = '/blogs/javascript/';
export const JS_BLOG_LINK: Array<any> = JS_BLOG_CONTENT.map(
  (blg: IBlogContentType) => {
    return {
      link: `${routePrefix}${blg.url}`,
      label: blg.label
    };
  }
);
