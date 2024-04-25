import { useState } from "react";
import FeedBack from "components/Feedback/Feedback";

const Homework07 = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const addLike = (): void => {
    setLikes((prevCount) => prevCount + 1);
  };

  const addDislikes = (): void => {
    setDislikes((prevCount) => prevCount + 1);
  };

  const reset = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
      <FeedBack onLikeClick={addLike} onDislikeClick={addDislikes} onResetClick={reset} likeValue={likes} dislikeValue={dislikes} />
    </div>
  );
};

export default Homework07;
