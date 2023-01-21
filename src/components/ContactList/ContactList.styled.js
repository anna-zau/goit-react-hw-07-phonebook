import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  margin-top: 20px;
  margin-right: 0;
  width: 300px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  padding: 3px 10px;
  width: 300px;
  height: 50px;

  background: rgb(231, 218, 232);
  background: linear-gradient(
    90deg,
    rgba(231, 218, 232, 1) 70%,
    rgba(224, 244, 243, 1) 99%
  );
  color: #000;

  border-radius: 5px;

  transition: box-shadow 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactNameBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    scale: 1.2;
  }
`;
