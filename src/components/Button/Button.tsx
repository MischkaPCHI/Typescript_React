import "./styles.css";
import { ButtonProps } from "./types";
import { ButtonStyledComponents } from "./styles";

function Button({ name, type = "button", onButtonClick, children }: ButtonProps) {
  return (
    <ButtonStyledComponents name={name} type={type} onClick={onButtonClick}>
      {children}
    </ButtonStyledComponents>
  );
}

export default Button;