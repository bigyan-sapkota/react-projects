import React from "react";
import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 150px;
  text-align: center;
  padding: 5px;
  h1 {
    font-size: 70px;
    line-height: 70px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
  }
`;
