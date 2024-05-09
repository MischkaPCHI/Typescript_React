import Button from "components/Button/Button";
import { UserWrapper, InfoText, UserTitle } from "../styles";
import { useNavigate } from "react-router-dom";

const TikTok = () => {
  const navigate = useNavigate();

  return (
    <UserWrapper>
      <UserTitle>TikTok page</UserTitle>
      <InfoText>
      TikTok – это приложение, которое позволяет пользователям создавать и публиковать 
      15-секундные видеоролики на любую тему. Пользователи могут добавлять эффекты: фильтры, 
      фоновую музыку и стикеры для создания забавных развлекательных видеороликов, часто постановочных.
       Количество загрузок TikTok во всем мире составило 1,5 миллиарда. Приблизительно треть его активных 
       пользователей составляют подростки.
      </InfoText>
      <Button name="Go to Clients page" onButtonClick={() => navigate("/clients")}>
        <h3>Go to Clients page</h3>
      </Button>
    </UserWrapper>
  );
};

export default TikTok;
