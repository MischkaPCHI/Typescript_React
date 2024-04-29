import { useState, ChangeEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

const Homework09 = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleInputChange1 = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(evt.target.value);
  };
  const handleInputChange2 = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(evt.target.value);
  };
  const handleButtonClick = () => {
    setShowResult(true);
  };

  return (
    <div>
      <Input label="Input 1" name="InputChange1" type="text" placeholder="Input" onChange={handleInputChange1} value={inputValue1} />
      <Input label="Input 2" name="InputChange2" type="text" placeholder="Input" onChange={handleInputChange2} value={inputValue2} />
      <Button name="SubmitButton" onButtonClick={handleButtonClick}>
        Submit
      </Button>
      {showResult && (
        <div>
          <h3>Value 1: {inputValue1}</h3>
          <h3>Value 2: {inputValue2}</h3>
        </div>
      )}
    </div>
  );
};

export default Homework09;
