import { Dispatch, SetStateAction } from "react";

export interface Props {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}