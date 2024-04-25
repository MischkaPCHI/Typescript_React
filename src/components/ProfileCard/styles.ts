import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ProfileCardStyles = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  background-color: rgba(128, 128, 128, 0.562);
  justify-content: center;
  margin-top: 40px;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 0 5px aqua, 0 0 15px rgb(0, 255, 179), 0 0 30px rgb(0, 255, 64);
  }
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const RingStyles = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

const RingIStyles = css`
  position: absolute;
  inset: 0;
  border: 2px solid #fff;
  transition: 0.5s;
`;

export const RingINthChild1Styles = styled.i`
  ${RingIStyles}
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  border-color: aqua;
  animation: animate 6s linear infinite;
`;

export const RingINthChild2Styles = styled.i`
  ${RingIStyles}
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  border-color: lawngreen;
  animation: animate 4s linear infinite;
`;

export const RingINthChild3Styles = styled.i`
  ${RingIStyles}
  border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
  animation: animate2 10s linear infinite;
  border-color: rgb(255, 0, 234);
`;

export const InfoStyles = styled.div`
  margin-top: 250px;
`;
