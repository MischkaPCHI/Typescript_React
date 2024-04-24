import './styles.css';

const Lesson07 = () => {
    type CustomArrayType<T = string> = T[];

    const numbersArray: CustomArrayType<number> = [2,3];
    const stringArray: CustomArrayType = ['2','3'];

    type CustomArrayTupelType<T = string> = [string, T];
    const arrayMix1: CustomArrayTupelType = ['apple', '2'];
    const arrayMix2: CustomArrayTupelType<number> = ['apple', 2];

    return <div>Lesson07</div>
}

export default Lesson07;