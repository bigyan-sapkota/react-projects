import React from "react";
import Images from "../assets";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={Images.dices} alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  float: right;
  color: #fff;
  padding: 10px 18px;
  background-color: #000;
  border: none;
  border-radius: 5px;
  min-width: 220px;
  height: 44px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background ease-in;
  }
`;
