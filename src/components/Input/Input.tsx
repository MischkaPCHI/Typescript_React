import "./styles.css";
import { InputProps } from "./types";
import { InputBlockStyled, LabelStyled, InputStyled } from "./styles";

const Input = ({ label, name, type, placeholder, onChange, value }: InputProps) => {
  return (
    <InputBlockStyled>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </InputBlockStyled>
  );
};

export default Input;