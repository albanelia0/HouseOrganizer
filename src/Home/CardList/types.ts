export interface Props {
  data: Array<Card>;
}

export interface Card {
  title: string;
  desc: string;
  frequency: string;
  passedDays: number;
  date: string;
}