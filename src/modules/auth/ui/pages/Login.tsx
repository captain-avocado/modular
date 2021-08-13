import React, { FC } from 'react';
import { FooterWrapper, FormWrapper, Wrapper } from './Styles';
import Logo from '../../../../common/ui/components/logo/Logo';

const Login: FC = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <FormWrapper></FormWrapper>
      <FooterWrapper></FooterWrapper>
    </Wrapper>
  );
};

export default Login;
