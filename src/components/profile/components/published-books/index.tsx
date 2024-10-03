import React, { useContext } from 'react';
import {
  IBookPublisherType,
  IPublishedBooksType
} from '../../../../types/profile-config.types';
import { THEME_CONSTANT } from '../../../../util/app-constants';
import { AppContext } from '../../../../util/app-context';
import { BookProviderLink } from '../../../home/book-provider/book-provider';
import IconPdf from '../../../icons/icon-pdf';
import { PROFILE_CONFIG } from '../../config/profile-config';

const publihsedBooks = PROFILE_CONFIG.BOOKS_PUBLISHED;

const BooksPublished = () => {
  const appContext = useContext(AppContext);

  return (
    <div className='custom-list grid-box'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Books Published</div>
        <div className='heading-separator'></div>
        <div className='grid-list publihsed-books'>
          {publihsedBooks.map((book: IPublishedBooksType) => {
            return (
              <div className='grid-list-item publihsed-books' key={book.title}>
                <div className='flex-col-100-height'>
                  <div className='item-name'>{book.title}</div>
                  <div className='item-desc flex-grow-1'>
                    {book.description}
                  </div>

                  <div className='flex-start flex-gap-10 mt-4'>
                    {book.publishers.map((pub: IBookPublisherType) => {
                      return (
                        <div className='flex'>
                          <BookProviderLink
                            type={pub.provider}
                            url={pub.url}
                            price=''
                          />
                        </div>
                      );
                    })}

                    <div className='book'>
                      <a
                        href={book.pdfUrl}
                        target='_blank'
                        className='book-cover'
                      >
                        <div className='toggle-img'>
                          <IconPdf
                            width={35}
                            height={35}
                            fillColor={
                              appContext.theme === THEME_CONSTANT.DARK_THEME
                                ? 'white'
                                : '#e12929'
                            }
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksPublished;
