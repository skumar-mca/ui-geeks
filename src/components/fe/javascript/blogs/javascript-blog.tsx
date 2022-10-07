import React from 'react';
import { useParams } from 'react-router-dom';
import CustomMenuWrapper from '../../../shared/custom-menu-wrapper/custom-menu-wrapper';
import HomePageWrapper from '../../../shared/home-page-wrapper/home-page-wrapper';
import { IBlogContentType, JS_BLOG_CONTENT } from './javascript-blog-content';
import { JS_BLOG_LINK } from './js-blog-link-tree';
import { JS_BLOGS_BREADCRUMB_LINKS } from './js-blogs-breadcrumb-links';
import { JS_BLOG_MENU_ITEMS } from './js-blogs-menu-items';

const RenderComponent = (props: any) => {
  const { blogId } = props;
  const blog = JS_BLOG_CONTENT.find(
    (blg: IBlogContentType) => blg.url === blogId
  );

  if (blog) {
    return <>{blog.content}</>;
  }

  return null;
};

const JSBlog = () => {
  const params = useParams();
  const { blogId } = params;

  return (
    <HomePageWrapper
      menuLinks={JS_BLOG_LINK}
      breadcrumbLink={JS_BLOGS_BREADCRUMB_LINKS}
      isCustomHome={true}
      customMenuContent={
        <CustomMenuWrapper
          menuTitle='JavaScript Blogs'
          menuItems={JS_BLOG_MENU_ITEMS}
        />
      }
    >
      <RenderComponent blogId={blogId} />
    </HomePageWrapper>
  );
};

export default JSBlog;
