import * as React from 'react';
import { FC } from 'react';
import { StyledFooter } from './Styles';
import Link from '../../../../../common/ui/components/link/Link';
import { AuthContainer } from '../../pages/Styles';

export const AuthFooter: FC = () => {
  return (
    <div>
      <AuthContainer>
        <StyledFooter>
          <Link>by @deeemons</Link>
          <Link>What is this project about?</Link>
        </StyledFooter>
      </AuthContainer>
    </div>
  );
};
