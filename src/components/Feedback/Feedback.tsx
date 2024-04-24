import Button from "components/Button/Button";
import "./styles.css"
import { FeedbackProps } from "./types";

const FeedBack = ({onLikeClick, onDislikeClick, onResetClick, likeValue, dislikeValue}: FeedbackProps) => {

    return (
        <div className="dis-likes-container">
            {/* <Button type='button' onButtonClick={() => setLikes(prevCount => prevCount + 1)} name='Like' /> */}
            <Button type='button' onButtonClick={onLikeClick} name='Like' />
            <p>{likeValue}</p>
            {/* <Button type='button' onButtonClick={() => setDislikes(prevCount => prevCount + 1)} name='Dislike' /> */}
            <Button type='button' onButtonClick={onDislikeClick} name='Dislike' />
            <p>{dislikeValue}</p>
            {/* <Button type='button' onButtonClick={() => {setLikes(0); setDislikes(0);}} name='Reset' /> */}
            <Button type='button' onButtonClick={onResetClick} name='Reset' />
        </div>
    )
}

export default FeedBack;