import { Dispatch, SetStateAction } from "react";
import { Card } from "../Home/CardList/types";
import { Search } from "../Home/types";

export interface Props {
  onSearchChange: (value: string) => void;
  onSaveButton: (target: Card) => void;
  search: Search
}