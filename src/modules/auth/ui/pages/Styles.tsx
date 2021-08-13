import styled from 'styled-components';
import { AuthFooter } from '../components/footer/AuthFooter';
import AuthForm from '../components/auth-form/AuthForm';

export const Wrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterWrapper = styled(AuthFooter)`
  margin-top: auto;
  color: red !important;
`;

export const FormWrapper = styled(AuthForm)`
  margin-top: auto;
`;

export const AuthContainer = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1060px;
`;
