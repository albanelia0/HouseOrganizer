import { CardType } from "../../Home/CardList/types";

export interface Props {
  openModal: boolean
  onCancel: () => void;
  onDelete: (item: CardType) => void;
  item: CardType
}