import React from "react";
import Images from "../assets";
import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <img src={Images.dices} alt="" />
      <div>
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
`;

const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  background-color: #000;
  border: none;
  border-radius: 5px;
  min-width: 220px;
`;
