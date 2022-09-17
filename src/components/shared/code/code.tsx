import classNames from 'classnames';
import React, { memo } from 'react';
import { anOldHope, CopyBlock, dracula, github } from 'react-code-blocks';
import { AppPrefix } from '../../../util/app-constants';
import './code.scss';
import { ICodeProps } from './code.types';

const Code = (props: ICodeProps) => {
  const {
    children,
    language = 'typescript',
    theme,
    showLineNumbers = false,
    codeBlock = false,
    highlight
  } = props;

  const codeClasses = classNames({ [`${AppPrefix}-code`]: true });

  const getTheme = () => {
    switch (theme) {
      case 'dracula':
        return dracula;
      case 'anOldHope':
        return anOldHope;
      case 'github':
        return github;

      default:
        return anOldHope;
    }
  };

  return (
    <div className={codeClasses} style={{ textAlign: 'left' }}>
      <CopyBlock
        text={children}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={getTheme()}
        wrapLines={true}
        codeBlock={codeBlock}
        highlight={highlight}
      />
    </div>
  );
};

export default memo(Code);
