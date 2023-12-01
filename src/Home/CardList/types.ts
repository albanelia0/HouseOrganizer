export interface Props {
  data: Array<CardType>;
  onEdit: (item: CardType, isEdit: boolean) => void;
  onDelete: (item: CardType) => void;
  onUpdate: (item: CardType) => void;
}

export interface CardType {
  title: string;
  desc: string;
  frequency: string;
  passedDays: number;
  date: string;
  id: string;
}