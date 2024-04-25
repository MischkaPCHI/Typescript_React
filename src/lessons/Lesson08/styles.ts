import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ButtonPropsStyled {
  mainButton: boolean;
}

//создание шаблона стилей с помощи функции css
const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
`;

export const Lesson08Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 30px;
`;

export const BoxComponent = styled.div`
  ${commonBoxStyles}
  background: #18ecff;
`;

export const ButtonStyledComponents = styled.button<ButtonPropsStyled>`
  width: 200px;
  height: 70px;
  border: none;
  background: ${({ mainButton }) => (mainButton ? "#61FF9E" : "#36C92C")};
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
`;
