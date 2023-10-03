import { Calculator } from "@/components/calculator/calculator";
import {
  HomeWrapper,
  HomeTitle,
  HomeContents,
  PrevInput,
} from "@/components/calculator/calculator.styles";
import { getCalculatedResult } from "@/components/calculator/util";
import { Inflation } from "@/components/inflation-graph";
import { useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<string | number>(0);
  const [prevMoney, setPrevMoney] = useState<string>("");

  const onCalculate = (input: string) => {
    const result = getCalculatedResult(input);
    return setTotal(result);
  };

  return (
    <HomeWrapper>
      <HomeTitle>Inflation 용돈 계산기</HomeTitle>
      <PrevInput
        className="prev-pocket-money"
        placeholder="작년 용돈을 입력해보세요."
        value={prevMoney}
        onChange={(e) => setPrevMoney(e.target.value)}
      />
      <HomeContents>
        <Calculator total={total} onCalculate={onCalculate} />
        {prevMoney && <Inflation total={total} prevMoney={prevMoney} />}
      </HomeContents>
    </HomeWrapper>
  );
}
