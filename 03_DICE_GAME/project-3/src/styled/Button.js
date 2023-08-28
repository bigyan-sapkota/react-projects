import styled from "styled-components";

export const Button = styled.button`
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
