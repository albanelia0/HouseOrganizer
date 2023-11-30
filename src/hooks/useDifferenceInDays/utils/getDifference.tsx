import { CardType } from "../../../Home/CardList/types";

export const getDataDayDifference = (data: CardType) => {
  const currentDate = new Date().getTime();

  const Difference_In_Time = currentDate - Number(data.date);
  const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 60 * 60 * 24));

    return Difference_In_Days
}