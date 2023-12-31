import { getPriceDisplayStr } from "@/components/util";
import { InflationProps } from "./@inflation.types";
import { Emphasize, StyledImage } from "@/components/@common.styled";
import { InflationContents } from "./@inflation.styled";
import { InflationContent } from "./content";

export const Inflation = ({ total, prevMoney }: InflationProps) => {
  const prevPocketMoney = Number(prevMoney);
  const currPocketMoney = Number(total);
  const raisedPocketMoney = (prevPocketMoney * 103.4) / 100;

  return (
    <InflationContents>
      <p>
        2023년 최신(8월) 물가 상승률에 따르면 최소한{" "}
        <Emphasize>{getPriceDisplayStr(raisedPocketMoney)} 원</Emphasize>은
        받아야하는데 말이죠 ..
      </p>
      <br />
      <StyledImage
        alt="inflation-rate"
        src={"/inflationRate.png"}
        layout="responsive"
        width={60}
        height={100}
      />
      <br />
      <InflationContent
        currPocketMoney={currPocketMoney}
        raisedPocketMoney={raisedPocketMoney}
      />
    </InflationContents>
  );
};
