import "./styles.css";
import { ButtonProps } from './types'

function Button({ name, type = "button", onButtonClick }: ButtonProps) {
  return (
    <button className="test-button" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;
