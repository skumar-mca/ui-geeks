import classNames from 'classnames';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { BOOK_LINKS, BOOKS, DeviceType } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import { getTotalReadTime } from '../../../util/util';
import IconPdf from '../../icons/icon-pdf';
import IconWhatsapp from '../../icons/icon-whatsapp';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import YalsTooltip from '../yals-tooltip/yals-tooltip';
import './topic-books.scss';

const BOOK_PUBLISHER = {
  AMAZON: 'Amazon',
  NOTION_PRESS: 'Notion Press'
};

interface ITopicBookProps {
  title: string | ReactNode;
  showDescription?: boolean;
}
const TopicBooks = ({ title, showDescription = false }: ITopicBookProps) => {
  const deviceType = useDeviceType();
  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setIsIndia(() => timeZone === 'Asia/Calcutta');
  }, []);

  getTotalReadTime();

  const { bookURLs, pdfUrl } = useMemo(() => {
    let pdfUrl = '';
    let bookURLs: Array<any> = [];

    switch (title) {
      case 'JavaScript':
        pdfUrl = BOOK_LINKS.JAVASCRIPT.COMPLETE_BOOK_URL;
        bookURLs = [
          {
            url: isIndia
              ? BOOKS.JAVASCRIPT.AMAZON_KINDLE.IN.url
              : BOOKS.JAVASCRIPT.AMAZON_PAPERBACK.US.url,
            publisher: BOOK_PUBLISHER.AMAZON,
            image: ImagePaths.JS.BOOK_KINDLE
          }
        ];
        break;

      case 'React':
        pdfUrl = BOOK_LINKS.JAVASCRIPT.COMPLETE_BOOK_URL;

        bookURLs = [
          {
            url: BOOKS.REACT.AMAZON_PAPERBACK.US.url,
            publisher: BOOK_PUBLISHER.AMAZON,
            image: ImagePaths.REACT.BOOK_KINDLE
          }
        ];

        if (isIndia) {
          bookURLs = [
            {
              url: BOOKS.REACT.REACT_NOTION_PRESS.url,
              publisher: BOOK_PUBLISHER.NOTION_PRESS,
              image: ImagePaths.REACT.BOOK_NOTION
            },
            {
              url: BOOKS.REACT.AMAZON_PAPERBACK.US.url,
              publisher: BOOK_PUBLISHER.AMAZON,
              image: ImagePaths.REACT.BOOK_KINDLE
            }
          ];
        }
    }

    return { pdfUrl, bookURLs };
  }, [title, isIndia]);

  const bookClassNames = classNames({
    'book-box': true,
    'book-box-with-desc': showDescription
  });
  return (
    <div className={bookClassNames}>
      {showDescription && (
        <div className='book-lover-text'>
          <div className='intro'>
            If reading is your <span className='highlight'>superpower</span>, is
            your <span className='highlight'>therapy</span> or you feel{' '}
            <span className='highlight'>proud to be a book worm</span>.
          </div>
          <div className='explore'>
            Then you may explore below book of{' '}
            <span className='highlight'>JavaScript</span>.
          </div>
        </div>
      )}

      <div className='language-book-section'>
        <div className='flex-group flex-justify-center'>
          {showDescription && (
            <div className='book-desc'>
              This JavaScript Core Concepts handbook contains the core concepts
              of JavaScript. The book does not try to cover every concept of
              JavaScript/ECMAScript, instead it focuses on the minimum amount of
              knowledge required to work as an individual contributor.
            </div>
          )}

          <YalsFlex
            className='book-info'
            justifyContent={FlexJustifyContentTypes.FlexStart}
            alignItems={FlexAlignItemsTypes.Center}
            gap='20px'
          >
            {bookURLs?.map((book: any) => {
              return (
                <div className='book' key={book.url}>
                  <a href={book.url} target='_blank'>
                    <img
                      className='book-cover'
                      src={book.image}
                      alt={`${title} book`}
                    />
                  </a>
                </div>
              );
            })}

            <div className='book'>
              <YalsTooltip content='View eBook'>
                <a href={pdfUrl} target='_blank' className='book-cover'>
                  <IconPdf width={50} height={50} fillColor='#e12929' />
                </a>
              </YalsTooltip>
            </div>

            {isMobile && (
              <div className='book'>
                <YalsTooltip content='Share eBook on whatsapp'>
                  <a
                    href={`whatsapp://send?text=${encodeURIComponent(pdfUrl)}`}
                    data-action='share/whatsapp/share'
                    className='whatsapp-share'
                  >
                    <IconWhatsapp width={40} height={40} fillColor='white' />
                  </a>
                </YalsTooltip>
              </div>
            )}
          </YalsFlex>
        </div>
      </div>
    </div>
  );
};

export default TopicBooks;
