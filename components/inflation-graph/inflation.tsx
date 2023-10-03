import Image from "next/image";
import { useEffect, useState } from "react";
import { InflationContents } from "../calculator/calculator.styles";
import { getPriceDisplayStr } from "../util";

export const Inflation = ({
  total,
  prevMoney,
}: {
  total: string | number;
  prevMoney: string;
}) => {
  const prevPocketMoney = Number(prevMoney);
  const currPocketMoney = Number(total);
  const raisedPocketMoney = (prevPocketMoney * 103.4) / 100;

  const getPocketMoneyGoodOrShit = () => {
    if (raisedPocketMoney > currPocketMoney) {
      return "shit";
    }
    return "good";
  };
  const content = () => {
    if (getPocketMoneyGoodOrShit() === "good") {
      return (
        <h2>{getPriceDisplayStr(currPocketMoney)} 원을 받았군요. ㅎㅎ 아싸</h2>
      );
    }
    if (getPocketMoneyGoodOrShit() === "shit") {
      return (
        <h2>
          {currPocketMoney} 원을 받았네요.. 차액{" "}
          {getPriceDisplayStr(raisedPocketMoney - currPocketMoney)} 원은
          어머니께서 채워주실거라 굳게 믿습니다..
        </h2>
      );
    }
  };

  return (
    <InflationContents>
      <Image
        alt="inflation-rate"
        src={"/inflationRate.png"}
        layout="responsive"
        width={70}
        height={100}
      />
      <h3>이번 용돈 총액은 {total} 원 입니다만..</h3>
      <p>
        2023년 최신(8월) 물가 상승률에 따르면 최소한 {raisedPocketMoney} 원은
        주셔야하는데
      </p>
      {content()}
    </InflationContents>
  );
};
