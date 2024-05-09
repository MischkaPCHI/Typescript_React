import Button from "components/Button/Button";
import { UserWrapper, InfoText, UserTitle } from "../styles";
import { useNavigate } from "react-router-dom";

const Instagram = () => {
  const navigate = useNavigate();

  return (
    <UserWrapper>
      <UserTitle>Instagram page</UserTitle>
      <InfoText>
        Instagram – это не просто бесконечная коллекция фотографий, а площадка, с помощью которой компании продвигают свой бизнес, рекламируют продукцию и находят новых клиентов. Это позволяет сделать видео и sponsored photos. Здесь знаменитости выкладывают красивые селфи с различных церемоний, вечеринок, а рядовые пользователи могут поделиться своими творческими успехами с аудиторией со всего мира. 
        В этой соцсети каждый пользователь сможет найти для себя что-то интересное, начиная от общения и развлечений и заканчивая открытием или продвижением своего бизнеса. Благодаря тому, что разработчики реализовали интеграцию изображений с Facebook, Twitter, Tumblr, Flickr и запустили Instagram Direct, эта социальная сеть стала одной из интереснейших площадок для пользователей. На этом интерес к Инстаграм не заканчивается, поговорим о том, что еще необычное и увлекательное таит в себе социальная сеть.
      </InfoText>
      <Button name="Go to Clients page" onButtonClick={() => navigate("/clients")}>
        <h3>Go to Clients page</h3>
      </Button>
    </UserWrapper>
  );
};

export default Instagram;
