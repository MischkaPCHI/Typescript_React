import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background: ${props => props.disabled ? '#bababa' : '#1fc3f5'};
  border: transparent;
  cursor: pointer;
`;