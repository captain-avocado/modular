import React, { FC, useState } from 'react';
import Input from '../../../../../common/ui/components/input/Input';
import { StyledForm } from './Styles';
import { Title } from '../../../../../common/ui/components/typography/Title';

const AuthForm: FC = () => {
  const [value, setValue] = useState('');

  function handleFormSubmit(): void {
    console.log('submit');
  }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <Title>Login</Title>
      <Input placeholder={'kek'} value={value} onChange={setValue}></Input>
      <Input placeholder={'kek'} value={value} onChange={setValue}></Input>
    </StyledForm>
  );
};

export default AuthForm;
