import { Dispatch, SetStateAction } from "react";
import { CardType } from "../Home/CardList/types";
import { Search } from "../Home/types";

export interface Props {
  onSearchChange: (value: string) => void;
  onSaveButton: (target: CardType) => void;
  onSort: () => void;
  search: Search
}