import styled from 'styled-components';

export const TaskContainer = styled.div`
  border-bottom: 1px solid gray;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

export const CheckCircle = styled.div`
  ${(props) => {
    if (props.done === true) {
      return `
        cursor: pointer;
        width: 2.1rem;
        height: 2rem;
        border-radius: 10rem;
        border: none;
        margin-right: 1.2rem;
        background: linear-gradient(95deg, #66c7fe, #ad6ff4);
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    } else {
      return `
        cursor: pointer;
        width: 2.1rem;
        height: 2rem;
        border-radius: 10rem;
        border: 1px solid gray;
        margin-right: 1.2rem;
        background: none;
      `;
    }
  }}
`;

export const Text = styled.div`
  font-size: 1.2rem;
  color: gray;

  text-decoration: ${(props) =>
    props.done === true ? 'line-through' : 'none'};
`;

export const Icon = styled.div`
  margin-left: auto;
`;
