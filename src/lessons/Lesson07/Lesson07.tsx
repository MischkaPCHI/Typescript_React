import './styles.css';
import Counter from 'components/Counter/Counter';
import { useState } from "react";

const Lesson07 = () => {
    type CustomArrayType<T = string> = T[];

    const numbersArray: CustomArrayType<number> = [2,3];
    const stringArray: CustomArrayType = ['2','3'];

    type CustomArrayTupelType<T = string> = [string, T];
    const arrayMix1: CustomArrayTupelType = ['apple', '2'];
    const arrayMix2: CustomArrayTupelType<number> = ['apple', 2];

    const [count, setCount] = useState<number>(0);

    const onMinus = (): void => {
      setCount((prevValue) => prevValue - 1);
    };
  
    const onPlus = (): void => {
      setCount((prevValue) => prevValue + 1);
    };

    return (
        <div>
            <Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} />
        </div>
    )
}

export default Lesson07;