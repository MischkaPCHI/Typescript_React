import "./styles.css";
import { ButtonProps } from "./types";
import { ButtonStyledComponents } from "./styles";

function Button({ name, type = "button", onButtonClick }: ButtonProps) {
  return (
    <ButtonStyledComponents type={type} onClick={onButtonClick}>
      {name}
    </ButtonStyledComponents>
  );
}

export default Button;
