export interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}