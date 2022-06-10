import styled from 'styled-components';

export const TaskContainer = styled.div`
  padding: 1.4rem 2rem;
  margin-top: 5.5rem;
  color: red;
  background: #fff;
  width: 32.7rem;
  height: 4.8rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  color: gray;
  display: flex;
  align-items: center;
`;

export const CheckCircle = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 10rem;
  border: 1px solid gray;
  margin-right: 1.2rem;
`;

export const TodoText = styled.input`
  border: none;
  font-family: inherit;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
