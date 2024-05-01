import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { Lesson10StyledContainer, ScrollContainer, ButtonContainer, FactContainer } from "./styles";
import Button from "components/Button/Button";

const Lesson10 = () => {
  const [catFacts, setCatFacts] = useState<string[]>([]);

  const fetchCatFacts = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const body = await response.json();////
      setCatFacts((prevFacts) => [...prevFacts, body.fact]);
    } catch (error) {
      console.error(error);
    }
  };

  const arrayCatFacts = catFacts.map((prevCatFact: string) => <FactContainer key={v4()}>{prevCatFact}</FactContainer>);

  useEffect(() => {
    fetchCatFacts();
  },[]);

  return (
    <Lesson10StyledContainer>
      <ScrollContainer>{arrayCatFacts}</ScrollContainer>
      <ButtonContainer>
        <Button name="GET MORE INFO" onButtonClick={fetchCatFacts}>GET MORE INFO</Button>
        <Button name="DELETE ALL DATA" onButtonClick={() => setCatFacts([])}>DELETE ALL DATA</Button>
      </ButtonContainer>
    </Lesson10StyledContainer>
  );
};

export default Lesson10;
