import { Card } from "../../Home/CardList/types";

export const useDifferenceInDays = (data: Card[]): Array<Card> | null => {

  if(!data) return null

  const getFinalResult = (() => {
    const newResult = data.map((data) => {

      const currentDate = new Date().getTime();

      const Difference_In_Time = Number(data.date) - currentDate;
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      return ({...data,passedDays: Math.round(Difference_In_Days)})
    })
    console.log("v", )
    return newResult
  })()


  return getFinalResult
}