
import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color:rgb(0, 0, 0);
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1.25rem;
  border: 1px solid \${props => props.error ? 'red' : '#dcdcdc'};
  border-radius: 1.0rem;
  width: 90px;
  outline: none;

  &:focus {
    border-color: #854dff;
  }
`;

const ErrorMsg = styled.small`
  color: red;
  font-size: 0.7rem;
  margin-top: 0.25rem;
`;

function InputField({ label, placeholder, value, onChange, error }) {
  return (
    <Field>
      <Label>{label}</Label>
      <Input type="number" placeholder={placeholder} value={value} onChange={onChange} error={!!error} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Field>
  );
}

export default InputField;
