import "./styles.css";
import { InputProps } from "./types";

const Input = ({ label, name, type, placeholder, onChange, value }: InputProps) => {
  return (
    <div className="input-block">
      <label className="label">{label}</label>
      <input className="input" name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;