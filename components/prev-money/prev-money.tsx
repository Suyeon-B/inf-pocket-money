import {
  PrevInput,
  InputTitle,
  PrevInputWrapper,
} from "../calculator/calculator.styles";

export const PrevMoney = ({
  prevMoney,
  setPrevMoney,
}: {
  prevMoney: string;
  setPrevMoney: any;
}) => {
  return (
    <PrevInputWrapper>
      <InputTitle>작년 용돈 🔽 </InputTitle>
      <PrevInput
        type="number"
        className="prev-pocket-money"
        placeholder="작년 용돈을 입력해보세요. 😇"
        value={prevMoney}
        onChange={(e) => setPrevMoney(e.target.value)}
      />
    </PrevInputWrapper>
  );
};
