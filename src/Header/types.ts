import { Dispatch, SetStateAction } from "react";
import { Card } from "../Home/CardList/types";

export interface Props {
  onSearchChange: (value: string) => void;
  onSaveButton: (target: Card) => void;
  searchValue: string
}