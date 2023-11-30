import { CardType } from "../../Home/CardList/types";
import { getDataDayDifference } from "./utils/getDifference";

export const useDifferenceInDays = (data: CardType[]): Array<CardType> | null => {

  if(!data) return null

  const getFinalResult = (() => {
    const newResult = data.map((dt) => {

      return ({...dt,passedDays: getDataDayDifference(dt)})
    })
    return newResult
  })()


  return getFinalResult
}