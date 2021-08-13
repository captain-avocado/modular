import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid #e2e2e2;
  padding: 16px;
  width: 360px;
  border-radius: 8px;
  height: auto;

  > div {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
