import "./styles.css";
import { ProfileCardsProps } from "./types";

const ProfileCard = ({ url, name, job, hobby }: ProfileCardsProps) => {
  return (
    <div className="profile-card">
      <div className="ring">
        <i></i>
        <i></i>
        <i></i>
        <img className="avatar" src={url} alt="Avatar" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>Род деятельности: {job}</p>
        <p>Хобби: {hobby}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
