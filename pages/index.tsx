import { Calculator } from "@/components/calculator/calculator";
import {
  HomeWrapper,
  HomeTitle,
  HomeContents,
  InflationContents,
} from "@/components/calculator/calculator.styles";
import { getCalculatedResult } from "@/components/calculator/util";
import { Inflation } from "@/components/inflation-graph";
import { useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<string | number>(0);

  const onCalculate = (input: string) => {
    const result = getCalculatedResult(input);
    return setTotal(result);
  };

  return (
    <HomeWrapper>
      <HomeTitle>Inflation 용돈 계산기</HomeTitle>
      <HomeContents>
        <Calculator total={total} onCalculate={onCalculate} />
        <Inflation />
        <InflationContents>inflation 그래프 자리 {total}원</InflationContents>
      </HomeContents>
    </HomeWrapper>
  );
}
