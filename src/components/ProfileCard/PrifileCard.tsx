import "./styles.css";
import { ProfileCardsProps } from "./types";
import { ProfileCardStyles, RingStyles, RingINthChild1Styles, RingINthChild2Styles, RingINthChild3Styles, InfoStyles } from "./styles";

const ProfileCard = ({ url, name, job, hobby }: ProfileCardsProps) => {
  return (
    <ProfileCardStyles>
      <RingStyles>
        <RingINthChild1Styles />
        <RingINthChild2Styles />
        <RingINthChild3Styles />
        <img className="avatar" src={url} alt="Avatar" />
      </RingStyles>
      <InfoStyles>
        <h3>{name}</h3>
        <p>Род деятельности: {job}</p>
        <p>Хобби: {hobby}</p>
      </InfoStyles>
    </ProfileCardStyles>
  );
};

export default ProfileCard;
