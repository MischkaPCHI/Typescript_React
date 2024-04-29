import { useEffect, useState } from "react";

import { Lesson10StyledContainer, ScrollContainer, ButtonContainer } from "./styles";
import Button from "components/Button/Button";

const Lesson10 = () => {

    const [catFact, setCatFacts] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const serverWork = async () => {
        try{
            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) {
                throw new Error('Failed fetch')
            }
            const body = await response.json();
            setCatFacts(prevFacts => [...prevFacts, body.fact + ' ']);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isLoading) {
            serverWork();
        }
    },[isLoading]);
    

    return (
        <Lesson10StyledContainer>
            <ScrollContainer>{catFact}</ScrollContainer>
            <ButtonContainer>
                <Button name="GET MORE INFO" onButtonClick={() => setIsLoading(true)}>GET MORE INFO</Button>
                <Button name="DELETE ALL DATA" onButtonClick={() => setCatFacts([])}>DELETE ALL DATA</Button>
            </ButtonContainer>
            
        </Lesson10StyledContainer>
    )

}

export default Lesson10;