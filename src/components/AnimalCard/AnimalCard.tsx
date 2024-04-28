import "./styles.css";
import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, AnimalCardImg } from "./styles";

const AnimalCard = ({ animalData }: AnimalCardProps) => {
  return (
    <AnimalCardWrapper>
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <AnimalCardImg src={animalData.image} alt="" />
    </AnimalCardWrapper>
  );
};

export default AnimalCard;
