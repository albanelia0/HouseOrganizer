export interface Props {
  data: Array<Card>;
}

export interface Card {
  title: string;
  desc: string;
  frequency: number | null;
  passedDays: number;
  date: string;
}