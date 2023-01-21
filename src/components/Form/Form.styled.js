import styled from 'styled-components';

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 310px;
  height: 30px;
  border: 1px solid #f21d6a;
  border-radius: 5px;
  padding: 2px 5px;
`;

export const Button = styled.button`
  font-size: 15px;
  display: block;
  width: 320px;
  height: 35px;
  margin-top: 15px;
  border: 0px;
  border-radius: 5px;
  background: #f21d6a;
  color: white;

  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
    scale: 1.03;
  }
`;
