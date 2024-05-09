import Button from "components/Button/Button";
import { UserWrapper, InfoText, UserTitle } from "../styles";
import { useNavigate } from "react-router-dom";

const Facebook = () => {
  const navigate = useNavigate();

  return (
    <UserWrapper>
      <UserTitle>Facebook page</UserTitle>
      <InfoText>
        Facebook - веб‑сайт популярной социальной сети. Дата основания сайта - 4 февраля 2004 года. Facebook зародился как сайт для общения студентов
        Гарвардского университета. Основателем сервиса является Марк Цукерберг, который смонтировал портал в общежитии университета. Благодаря своему
        сайту Марк Цукерберг стал самым молодым "бумажным" миллиардером в свои 23 года. В марте 2008 года журнал Forbes включил Цукерберга в список
        самых богатых людей мира. Основным отличием Facebook от существовавших тогда социальных сетей стала именно возможность контакта: Цукерберг
        предложил людям простой и удобный способ обмениваться информацией друг о друге. Вплоть до сентября 2005 года сайт использовали только
        студенты. В июне 2006 года Facebook был открыт для профессиональных сообществ, а в сентябре на сайте была открыта свободная регистрация.
      </InfoText>
      <Button name="Go to Clients page" onButtonClick={() => navigate("/clients")}>
        <h3>Go to Clients page</h3>
      </Button>
    </UserWrapper>
  );
};

export default Facebook;
