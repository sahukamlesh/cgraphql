import styled from "styled-components";
import { hoverEffect } from "../../utils";
import { themeColor } from "../../utils";

export const RecoveringCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;
export const CardContent = styled.div`
  margin: 1rem;
`;
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;
export const RecoveringText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;
export const Recovered = styled.h2`
  text-align: center;
`;
