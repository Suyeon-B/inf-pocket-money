import { getPriceDisplayStr } from "../util";
import {
  Emphasize,
  InflationContentWrapper,
  StyledImage,
} from "../calculator/calculator.styles";

export const InflationContent = ({
  currPocketMoney,
  raisedPocketMoney,
}: {
  currPocketMoney: number;
  raisedPocketMoney: number;
}) => {
  const getPocketMoneyGoodOrShit = () => {
    if (raisedPocketMoney > currPocketMoney) {
      return "shit";
    }
    return "good";
  };

  const content = () => {
    if (getPocketMoneyGoodOrShit() === "good") {
      return (
        <>
          <h2>
            올해는 총
            <Emphasize>❤️{getPriceDisplayStr(currPocketMoney)} 원❤️</Emphasize>
            을 받았군요.
          </h2>
          <h1>감사합니다 !!!!!!!</h1>
          <StyledImage
            alt="good"
            src={"/good.png"}
            layout="responsive"
            width={60}
            height={100}
          />
          <p>
            ༼;´༎ຶ۝༎ຶ༽우워어어어어엌!!!!!!!끆ㄱ끄얶흒끕..끆껑껑..끆끆흡끅..흡꾺꾺꾹ㄱ끄엉..헝헝헝ㅇ..흡끄륵ㄱ끅끅ㄱ끄엉엉..흡끄윽ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ깔깔😂ㅋㅋ🌟ㅋ🌟ㅋㅋ우르롹끼🐒ㅋㅋ🌟ㅋ🌟ㅋㅋ명절
            짱❗️ 용돈 짱❗️
          </p>
        </>
      );
    }
    if (getPocketMoneyGoodOrShit() === "shit") {
      return (
        <>
          <h2>
            올해는 총 <Emphasize>👎{currPocketMoney} 원👎</Emphasize>을
            받았네요..🥲
          </h2>
          <StyledImage
            alt="shit"
            src={"/shit.png"}
            layout="responsive"
            width={60}
            height={100}
          />
          <p>
            차액{" "}
            <Emphasize>
              {getPriceDisplayStr(raisedPocketMoney - currPocketMoney)} 원
            </Emphasize>
            은 제가 굶던지 땅을 파던지 알아서 구해가지고 잘 살아볼게요 통계청
            자료를 보니 전기 가스 수도세는 21.1%나 올랐다는데 그냥 무시하세요
            제가 알아서 잘 살아볼게요.. 꺼이꺼이..😞.. 흐그극😭..
            흐국뚜흐국뚜리😢.. 앙앙엉엉😫..주르륵..컹..꺼이꺼이..😞.. 흐그극😭..
            흐국뚜흐국뚜리 꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리😢..
            앙앙엉엉😫..주르륵..컹..꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리
            꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리😢..
            앙앙엉엉😫..주르륵..컹..꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리
            꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리😢..
            앙앙엉엉😫..주르륵..컹..꺼이꺼이..😞.. 흐그극😭.. 흐국뚜흐국뚜리{" "}
            <Emphasize color="black">...더보기</Emphasize>
          </p>
        </>
      );
    }
  };

  return <InflationContentWrapper>{content()}</InflationContentWrapper>;
};