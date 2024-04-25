import { BoxComponent, 
    Lesson08Component,
    ButtonStyledComponents } from "./styles";

const Lesson08 = () => {
  return (
    <Lesson08Component>
      <BoxComponent>My Box</BoxComponent>
      <ButtonStyledComponents mainButton>Costum Button</ButtonStyledComponents>
      <ButtonStyledComponents mainButton={false}>Costum Button</ButtonStyledComponents>
    </Lesson08Component>
  );
};

export default Lesson08;
