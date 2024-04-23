import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css"

const FeedBack = () => {
    const [likes, setLikes] = useState<number>(0);
    const [dislikes, setDislikes] = useState<number>(0);

    const addLike = () => {
        setLikes(prevCount => prevCount + 1);
    }

    const addDislikes = () => {
        setDislikes(prevCount => prevCount + 1);
    }

    const reset = () => {
        setLikes(0);
        setDislikes(0);
    }

    return (
        <div className="dis-likes-container">
            {/* <Button type='button' onButtonClick={() => setLikes(prevCount => prevCount + 1)} name='Like' /> */}
            <Button type='button' onButtonClick={addLike} name='Like' />
            <p>{likes}</p>
            {/* <Button type='button' onButtonClick={() => setDislikes(prevCount => prevCount + 1)} name='Dislike' /> */}
            <Button type='button' onButtonClick={addDislikes} name='Dislike' />
            <p>{dislikes}</p>
            {/* <Button type='button' onButtonClick={() => {setLikes(0); setDislikes(0);}} name='Reset' /> */}
            <Button type='button' onButtonClick={reset} name='Reset' />
        </div>
    )
}

export default FeedBack;