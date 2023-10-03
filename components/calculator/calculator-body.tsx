import { useState } from "react";
import { CalculatorBodyProps } from "./@calcalator.types";
import {
  CalculatorButton,
  CalculatorButtonRow,
  CalculatorButtonWrapper,
} from "./@calculator.styled";

export const CalculatorBody = ({ onClickButton }: CalculatorBodyProps) => {
  const [active, setActive] = useState("");
  const options = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "+",
    "AC",
    "0",
    "C",
    "=",
  ];

  const getTheme = (option: string) => {
    switch (option) {
      case "=":
        return "equals";
      case "AC":
        return "ac";
      case "operator":
        return "operator";
      default:
        return "";
    }
  };

  return (
    <CalculatorButtonWrapper>
      <CalculatorButtonRow>
        {options.map((option) => (
          <CalculatorButton
            key={option}
            active={active === option}
            theme={getTheme(option)}
            onMouseDown={() => setActive(option)}
            onMouseUp={() => setActive("")}
            onClick={() => onClickButton(option)}
          >
            {option}
          </CalculatorButton>
        ))}
      </CalculatorButtonRow>
    </CalculatorButtonWrapper>
  );
};
