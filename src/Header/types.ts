import { Dispatch, SetStateAction } from "react";

export interface Props {
  onChange: (value: string) => void;
  value: string;
}