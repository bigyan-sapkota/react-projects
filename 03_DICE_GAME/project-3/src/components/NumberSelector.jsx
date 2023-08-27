import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const arrNumber = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
