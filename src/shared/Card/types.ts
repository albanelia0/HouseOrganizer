import { CardType } from "../../Home/CardList/types";

export interface Props {
  title: string;
  desc: string;
  frequency: number;
  passedDays: number;
  onEdit: (item: CardType, isEdit: boolean) => void;
  onDelete: (item: CardType) => void;
  item: CardType
}