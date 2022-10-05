import { ReactNode } from 'react';

export interface IYALSInputProps {
  id: string;
  label?: string;
  value?: string;
  placeHolder?: string;
  icon?: ReactNode;
  size?: 'sm' | 'lg';
  onChange?: (evt: any) => void;
  onKeyUp?: (evt: any) => void;
}
