import { ReactNode } from 'react';
import { ValueOf } from '../../../types/common';

export const YALSButtonVariantTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
  Link: 'link',
  Clear: 'clear',
  Light: 'light',
  Dark: 'dark',
  Info: 'info',
  Warning: 'warning',
  Danger: 'danger',
  Success: 'success'
};

export const YALSButtonSizeTypes = {
  Small: 'sm',
  Large: 'lg'
};

export type YALSButtonVariantType = ValueOf<typeof YALSButtonVariantTypes>;
export type YALSButtonSizeType = ValueOf<typeof YALSButtonSizeTypes>;

export interface YALSButtonProps {
  children?: ReactNode | string;
  text?: ReactNode | string;
  className?: string;
  variant?: YALSButtonVariantType;
  outline?: boolean;
  size?: YALSButtonSizeType;
  href?: string;
  title?: string;
  onClick: (evt?: any) => void;
}
