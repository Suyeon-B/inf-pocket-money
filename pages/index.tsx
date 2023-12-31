import { getCalculatedResult } from "@/components/calculator/util";
import { Calculator } from "@/components/calculator/@index";
import { Inflation } from "@/components/inflation/@index";
import { PrevMoney } from "@/components/prev-money";
import { useState } from "react";
import Image from "next/image";
import {
  HomeWrapper,
  HomeTitleWrapper,
  HomeTitle,
  StyledP,
  HomeContents,
  InputArea,
  StyledImage,
} from "@/components/@common.styled";

export default function Home() {
  const [total, setTotal] = useState<string | number>(0);
  const [prevMoney, setPrevMoney] = useState<string>("");

  const onRefresh = () => {
    setTotal(0);
    setPrevMoney("");
  };

  const onCalculate = (input: string) => {
    const result = getCalculatedResult(input);
    setTotal(result);
  };

  return (
    <>
      <HomeWrapper>
        <HomeTitleWrapper>
          <HomeTitle>인플레이션 용돈 계산기</HomeTitle>
          <Image
            alt="refresh"
            src={"/refresh.png"}
            width={25}
            height={25}
            style={{ marginBottom: "2px", cursor: "pointer" }}
            onClick={onRefresh}
          />
        </HomeTitleWrapper>
        <StyledP>💡 Tip: 월급, 연봉으로도 계산해보자..</StyledP>
        <br />
        <HomeContents>
          <InputArea>
            <StyledImage
              alt="mom"
              src={prevMoney.length ? "/mom-bad.png" : "/mom.png"}
              layout="responsive"
              width={20}
              height={100}
            />
            <PrevMoney prevMoney={prevMoney} setPrevMoney={setPrevMoney} />
            <Calculator total={total} onCalculate={onCalculate} />
          </InputArea>
          {prevMoney && <Inflation total={total} prevMoney={prevMoney} />}
        </HomeContents>
      </HomeWrapper>
    </>
  );
}
