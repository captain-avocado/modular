import styled from 'styled-components';
import { Props } from './Input';

export const StyledInput = styled.input<Pick<Props, 'hasError'>>`
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#e2e2e2')};
  font-family: 'Montserrat', sans-serif;
`;
