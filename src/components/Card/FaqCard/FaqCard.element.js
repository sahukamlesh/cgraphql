import styled from 'styled-components'
import { cardShadow, hoverEffect } from "../../../utils/index";
export const FaqContainer = styled.div`  width: 35rem;
border-radius: 1rem;
margin-top: 1rem;
background-color: white;
height: 140%;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
  box-shadow: ${hoverEffect};
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}`;
export const CardContent = styled.div`
 @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }`;
export const Faqs = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }`;
export const Avatar = styled.div`  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }`;
export const TextContainer = styled.div` margin-left: 1rem;`;
export const Title = styled.h4``;
