import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #d0fff9;
  border-radius: 10px;
  border: 3px solid #1f4261;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1.1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
    width: 100%;
    margin: 5px 0;
    height: 40px;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg,#3FBC9B,#596418)'
        : !correct && userClicked
        ? 'linear-gradient(90deg,#ac331d,#cf0909)'
        : 'linear-gradient(90deg,#1F4261,#6EAFD3)'};
    border: 4px solid #eee;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #ffffff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
