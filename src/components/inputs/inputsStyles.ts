import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-weight: bold;
  color: Black;
`;

export const InputStyle = styled.input`
  width: 100%;
  margin-right: 10px;
  font-size: 15px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 3px;
  margin-top: 5px;

`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 5px;
`;
