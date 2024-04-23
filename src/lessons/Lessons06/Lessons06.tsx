
const Lessons06 = () => {
    let userName: string = 'Tom';
    console.log(userName);

    userName = '2';
    console.log(userName);

    const message: string = `Hello ${userName}`;

    //Тип чисел
    const luckyNumber: number = 2;

    //Тип boolean
    const isAdmin: boolean = true;

    return <div>Lesson06 - {message}</div>
}

export default Lessons06;