import { CalculatorBodyProps } from "./calcalator.types";
import { CalculatorButton } from "./calculator.styles";

export const CalculatorBody = ({ onClickButton }: CalculatorBodyProps) => {
  return (
    <>
      <div>
        <CalculatorButton onClick={() => onClickButton("7")}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("8")}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("9")}>
          9
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("+")}>
          +
        </CalculatorButton>
      </div>
      <div>
        <CalculatorButton onClick={() => onClickButton("4")}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("5")}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("6")}>
          6
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("-")}>
          -
        </CalculatorButton>
      </div>
      <div>
        <CalculatorButton onClick={() => onClickButton("1")}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("2")}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("3")}>
          3
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("*")}>
          *
        </CalculatorButton>
      </div>
      <div>
        <CalculatorButton onClick={() => onClickButton("0")}>
          0
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("=")}>
          =
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("C")}>
          C
        </CalculatorButton>
        <CalculatorButton onClick={() => onClickButton("/")}>
          /
        </CalculatorButton>
      </div>
      <div>
        <CalculatorButton onClick={() => onClickButton("AC")}>
          AC
        </CalculatorButton>
      </div>
    </>
  );
};
