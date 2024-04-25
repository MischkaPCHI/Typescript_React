import "./styles.css";
import { InputProps } from "./types";

const Input = ({ label, name, type, placeholder }: InputProps) => {
  return (
    <div className="input-block">
      <label className="label">{label}</label>
      <input className="input" name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
