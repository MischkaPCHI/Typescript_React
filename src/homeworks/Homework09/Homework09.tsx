import { useState } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const Homework09 = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [outputValue1, setOutputValue1] = useState('');
    const [outputValue2, setOutputValue2] = useState('');

    const handleInputChange1 = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue1(evt.target.value);
    }
    const handleInputChange2 = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue2(evt.target.value);
    }
    const handleButtonClick = () => {
        setOutputValue1(inputValue1);
        setOutputValue2(inputValue2);
    }

    return (
        <>
            <Input label="Input 1" name="InputChange1" type="text" placeholder="Input" onChange={handleInputChange1} value={inputValue1} />
            <Input label="Input 2" name="InputChange2" type="text" placeholder="Input" onChange={handleInputChange2} value={inputValue2} />
            <Button name="SubmitButton" onButtonClick={handleButtonClick}>Submit</Button>
            <div>
                <h3>Value 1: {outputValue1}</h3>
                <h3>Value 2: {outputValue2}</h3>
            </div>
        </>
    )
}

export default Homework09;