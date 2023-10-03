import { Dispatch, SetStateAction } from "react";

export interface PrevMoneyProps {
  prevMoney: string;
  setPrevMoney: Dispatch<SetStateAction<string>>;
}
