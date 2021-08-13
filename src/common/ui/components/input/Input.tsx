import React, { ChangeEvent, FC } from 'react';
import { StyledInput } from './Styles';

export interface Props {
  placeholder?: string;
  type?: string;
  value: string;
  onChange(value: string): void;
  hasError?: boolean;
}

const Input: FC<Props> = ({
  placeholder,
  type,
  value,
  onChange,
  hasError
}: Props) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange(e.target.value);
  }

  return (
    <div className="input-wrapper">
      <StyledInput
        value={value}
        onChange={handleChange}
        type={type || 'text'}
        placeholder={placeholder || ''}
        hasError={hasError}
      ></StyledInput>
    </div>
  );
};

export default Input;
