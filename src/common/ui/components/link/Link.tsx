import React, { FC, ReactNode } from 'react';
import { StyledLink } from './Styles';

export interface Props {
  children: ReactNode;
  href?: string;
}

const MyComponent: FC<Props> = ({ children, href }: Props) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default MyComponent;
