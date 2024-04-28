import "./styles.css";
import { TextAreaProps } from "./types";
import { TextAreaContainerStyled } from "./styles";

function TextArea({ placeholder, name, label }: TextAreaProps) {
  return (
    <TextAreaContainerStyled>
      <label>{label}</label>
      <textarea placeholder={placeholder} name={name}></textarea>
    </TextAreaContainerStyled>
  );
}

export default TextArea;
