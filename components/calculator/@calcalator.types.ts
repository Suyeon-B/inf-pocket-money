export interface CalculatorProps {
  total: number | string;
  onCalculate: (input: string) => void;
}

export interface CalculatorBodyProps {
  onClickButton: (value: string) => void;
}
