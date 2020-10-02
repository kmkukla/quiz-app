import * as React from 'react';
import { AnswerObject } from '../App';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 50px 0 10px;
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

type StyledAnswerSummaryProps = {
  correct: boolean;
};

const StyledAnswerSummary = styled.div<StyledAnswerSummaryProps>`
  .correctness {
    background: ${({ correct }) =>
      correct
        ? 'linear-gradient(90deg,#3FBC9B,#596418)'
        : 'linear-gradient(90deg,#FF5637,#C1581B)'};
    color: white;
  }
`;

type Props = {
  userAnswers: AnswerObject[];
};
const AnswersSummary: React.FC<Props> = ({ userAnswers }) => {
  return (
    <StyledWrapper>
      <h2>Summary of your answers.</h2>
      {userAnswers.map(({ question, answer, correctAnswer, correct }) => (
        <StyledAnswerSummary key={question} correct={correct}>
          <p
            dangerouslySetInnerHTML={{
              __html: question,
            }}
          />
          <p>Your answer: {answer}</p>
          <p>Correct answer: {correctAnswer}</p>
          <p className="correctness">{correct ? `Correct!` : `Incorrect!`}</p>
          <br />
        </StyledAnswerSummary>
      ))}
    </StyledWrapper>
  );
};

export default AnswersSummary;
