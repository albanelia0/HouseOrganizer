import { CardType } from "../../Home/CardList/types";

export interface Props {
  onSaveButton: (target: CardType) => void;
  onClick: () => void;
}
