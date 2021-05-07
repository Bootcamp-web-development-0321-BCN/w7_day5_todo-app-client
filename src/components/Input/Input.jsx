import React from 'react';
import { SCFormItemWrapper, SCInput, SCLabel } from './Input.styled';

const Input = ({ name,
  placeholder,
  type = 'text',
  disabled,
  width,
  change,
  error,
  label,
  value,
  ...props }) => {

  return (

    <SCFormItemWrapper
      {...props}
      width={width}
    >
      <SCLabel htmlFor={name}>{label}</SCLabel>
      <SCInput
        type={type}
        onChange={(e) => {
          change(e);
        }}
        error={error}
        name={name}
        value={value}
        placeholder={placeholder}
      />

      {error
        && (
          <p>
            {error.message}
          </p>
        )}
    </SCFormItemWrapper>
  );
};

export default Input;