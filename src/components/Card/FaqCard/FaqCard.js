import React from "react";
import {
  FaqContainer,
  CardContent,
  Faqs,
  Info,
  Avatar,
  TextContainer,
  Title,
} from "./FaqCard.element";

export default function FaqCard() {
  return (
    <>
      <FaqContainer>
        <CardContent>
          <Faqs>
          <iframe width="550" height="150" src="https://www.youtube.com/embed/kdo5Lc02st8" title="YouTube video player" frameborder="2" allow="accelerometer;autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture ;" value="loop" allowfullscreen></iframe>
          </Faqs>
        </CardContent>
      </FaqContainer>
    </>
  );
}
