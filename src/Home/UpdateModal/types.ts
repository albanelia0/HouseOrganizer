import { CardType } from "../../Home/CardList/types";

export interface Props {
  openModal: boolean
  onCancel: () => void;
  onUpdate: () => void;
  item: CardType
}