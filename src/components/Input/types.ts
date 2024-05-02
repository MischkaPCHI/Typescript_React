import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
