import React, { FC } from 'react';
import { LogoWrapper } from './Styles';
import { ReactComponent as LogoIcon } from '../../../../assets/svg/map-logo.svg';

const Logo: FC = () => {
  return (
    <LogoWrapper>
      <LogoIcon></LogoIcon>
    </LogoWrapper>
  );
};

export default Logo;
