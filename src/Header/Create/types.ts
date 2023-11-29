import { Card } from "../../Home/CardList/types";

export interface Props {
  onSaveButton: (target: Card) => void;
  onClick: () => void;
}
