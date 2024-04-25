import AnimalCard from "components/AnimalCard/AnimalCard";
import { animalsData, profileData } from "./data";
import Button from "components/Button/Button";
import Counter from "components/Counter/Counter";
import { on } from "events";
import { useState } from "react";
import FeedBack from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import LoginForm from "components/LoginForm/LoginForm";
import ProfileCard from "components/ProfileCard/PrifileCard";
import TextArea from "components/TextArea/TextArea";
import { ButtonStyled } from "./styled";

const Homework08 = () => {

    // const [count, setCount] = useState(0);

    // const onMinus = () => {
    //   setCount((prevValue) => prevValue - 1);
    // };
  
    // const onPlus = () => {
    //   setCount((prevValue) => prevValue + 1);
    // };

    // const [likes, setLikes] = useState(0);
    // const [dislikes, setDislikes] = useState(0);

    // const addLike = () => {
    //     setLikes(prevCount => prevCount + 1);
    // }

    // const addDislikes = () => {
    //     setDislikes(prevCount => prevCount + 1);
    // }

    // const reset = () => {
    //     setLikes(0);
    //     setDislikes(0);
    // }

    return (
        // <div>
        //     {animalsData.map((animal, i) => <AnimalCard key={i} animalData={animal} />)}
        // </div>
        // <Button onButtonClick={() => alert('Hello')} name="Hi" />
        // <Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} />
        // <FeedBack onDislikeClick={addDislikes} onLikeClick={addLike} onResetClick={reset} likeValue={likes} dislikeValue={dislikes} />
        // <Input label="Hi" name="input" type="text" placeholder="Enter" />
        // <LoginForm />
        // <div>
        //     {
        //         profileData.map((person, i) => <ProfileCard key={i} url={person.avatarUrl} name={person.name} 
        //         job={person.job} hobby={person.hobby} />)
        //     }
        // </div>
        // <TextArea placeholder="Hi" name=")" label="Text" />
        <div>
            <ButtonStyled>Yes</ButtonStyled>
            <ButtonStyled disabled >No</ButtonStyled>
        </div>
    )
};

export default Homework08;