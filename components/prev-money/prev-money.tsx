import { InputTitle } from "../@common.styled";
import { PrevInputWrapper, PrevInput } from "./@prev-money.styled";
import { PrevMoneyProps } from "./@prev-money.types";

export const PrevMoney = ({ prevMoney, setPrevMoney }: PrevMoneyProps) => {
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
