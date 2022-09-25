import classNames from 'classnames';
import React, { useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import { JSLINK } from '../../fe/javascript/js-link-tree';
import HomeIcon from '../../icons/home-icon';
import SearchIcon from '../../icons/search-icon';
import YalsButton from '../../shared/yals-button/yals-button';
import YALSFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-header.scss';

const HomeHeader = () => {
  const navigate = useNavigate();
  const appHeader = classNames({ [`${AppPrefix}-home-header`]: true });

  const [searchResult, setSearchResult] = useState<Array<any>>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');

  const onHandleChange = (evt: any) => {
    const { value } = evt.target;
    setSearchTerm(() => value);
    if (!value || (value || '').toString().length < 2) {
      setSearchResult(() => []);
      return;
    }

    let result: Array<any> = [];
    const jsData = JSLINK;

    const searchTerm = (value || '').toLowerCase();
    jsData.forEach((itm: any) => {
      itm.tags &&
        itm.tags.forEach((tag: any) => {
          if (tag.indexOf(searchTerm) > -1) {
            const existingResItemIndex = result.findIndex(
              (itm1: any) => itm.link === itm1.link
            );
            if (existingResItemIndex === -1) {
              result.push({ ...itm, matchingElement: [tag] });
            } else {
              result[existingResItemIndex].matchingElement.push(tag);
            }
          }
        });
    });

    setSearchResult(() => result);
    if (result.length > 0) {
      setSelectedItemIndex(() => 0);
    }
  };

  const onHandleKeyUp = (evt: any) => {
    if (evt.code === 'ArrowUp') {
      setSelectedItemIndex((prev) => {
        return prev <= 0 ? searchResult.length - 1 : prev - 1;
      });
    }

    if (evt.code === 'ArrowDown') {
      setSelectedItemIndex((prev) => {
        return prev >= searchResult.length - 1 ? 0 : prev + 1;
      });
    }

    if (evt.code === 'Enter') {
      onClickCurrentItem();
    }
  };

  const onClickCurrentItem = () => {
    if (selectedItemIndex > -1) {
      onHandleLinkClick(searchResult[selectedItemIndex]);
    }
  };

  const onHandleLinkClick = (itm: any) => {
    if (itm) {
      setSearchResult(() => []);
      setSelectedItemIndex(() => -1);
      navigate(itm.link);
      setSearchTerm(() => '');
    }
  };
  return (
    <div className={appHeader}>
      <YALSFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <ul className='ul-main-menu'>
          <li>
            <Link to='/'>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to='/fe/javascript-home'>JavaScript</Link>
          </li>
        </ul>

        <div className='yals-search' onKeyUp={onHandleKeyUp}>
          <InputGroup className='yals-search-input'>
            <Form.Control
              placeholder='search...'
              aria-label='search content'
              aria-describedby='search-icon'
              onChange={onHandleChange}
              value={searchTerm}
            />
            <InputGroup.Text id='search-icon' onClick={onClickCurrentItem}>
              <SearchIcon fillColor='white' />
            </InputGroup.Text>
          </InputGroup>

          <div className='search-result-wrapper'>
            {searchResult.map((itm: any) => {
              return (
                <YalsButton
                  key={itm.link}
                  onClick={onHandleLinkClick.bind(this, itm)}
                  block={true}
                  active={itm.link === searchResult[selectedItemIndex].link}
                >
                  <h5>{itm.label}</h5>
                  <div className='matching-term'>
                    {itm.matchingElement.join(', ')}
                  </div>
                </YalsButton>
              );
            })}
          </div>
        </div>
      </YALSFlex>
    </div>
  );
};

export default HomeHeader;
