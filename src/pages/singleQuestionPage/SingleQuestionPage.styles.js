import styled from 'styled-components';

export const QuestionPageWrapper = styled.div`
  background-color: aliceblue;
  padding: 20px;

  a {
    font-size: 20px;

    &:hover {
      color: gray;
    }
  }
`;

export const AnswerWrapper = styled.div`
  h6 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  a {
    font-size: 16px;
  }
`;

export const HTMLContent = styled.div`
  p {
    margin-top: 8px;
    font-size: 16px;
  }

  pre {
    background-color: darkgray;
    color: white;
    padding: 12px 0;
    margin: 0 24px;
    text-align: center;
  }
`;
