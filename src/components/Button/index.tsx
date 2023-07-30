import React, { ButtonHTMLAttributes } from 'react';

import {LoginButton } from './style'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <LoginButton {...rest}>
      {children}
    </LoginButton>
  );
};


export default Button