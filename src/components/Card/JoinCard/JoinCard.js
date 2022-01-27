import React from "react";
import {
  JoinCardMain,
  CardContent,
  Join,
  JoinLogo,
  JoinText,
  JoinHead,
  JoinFoot,
  JoinButton,
} from "./JoinCard.element";
import { FaSlack } from "react-icons/fa";
export default function JoinCard() {
  return (
    <>
      <JoinCardMain>
        <CardContent flex={true}>
          <Join>
            <JoinLogo>
              <FaSlack />
            </JoinLogo>
            <JoinText>
              <JoinHead>For More Information </JoinHead>
            </JoinText>
          </Join>
          <JoinButton>Click Here</JoinButton>
        </CardContent>
      </JoinCardMain>
    </>
  );
}
