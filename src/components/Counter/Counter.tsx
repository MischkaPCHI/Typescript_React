import Button from "components/Button/Button";
import { CounterProps } from "./types";
import { CounterWrapperContainer, ButtonControl } from "./styles";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  
  return (
    <CounterWrapperContainer>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" />
      </ButtonControl>
      <p>{countValue}</p>
      <ButtonControl className="button-control">
        <Button onButtonClick={onPlusClick} name="+" />
      </ButtonControl>
    </CounterWrapperContainer>
  );
}

export default Counter;
