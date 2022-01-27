import React, { useState } from "react";
import {
  NavbarContainer,
  Text,
  InputContainer,
  Icon,
  Input,
  Container,
  SubContainer,
  SectionOne,
  ColumnOne1,
  ColumnTwo1,
  TitleText,
  SectionTwo,
  ColumnOne2,
  FaqContainer,
  ColumnTwo2,
  SearchButton
} from "./Navbar.element";
import { FiSearch } from "react-icons/fi";
import Card from "../Card/Card";
import { GET_COVID_DATA } from "../../GraphQL/Query";
import { useLazyQuery } from "@apollo/client";
import CardActive from "../Card/CardActive/CardActive";
import FlagCard from "../Card/FlagCard/FlagCard";
import FaqCard from "../Card/FaqCard/FaqCard";
import JoinCard from "../Card/JoinCard/JoinCard";
import Report from "../Card/Report/Report";
import moment from "moment";

function Navbar() {
  const [countrySearched, setCountrySearched] = useState("India");
  const [getCovidData, { data }] = useLazyQuery(GET_COVID_DATA, {
    variables: { name: countrySearched },
  });
  const greetingText = () => {
    const now = moment();
    const currentHour = now.local().hour();
    if (currentHour >= 12 && currentHour <= 17) return "Good Afternoon";
    else if (currentHour <= 1) return "Good Evening";
    else return "Good Morning";
  };
  
  return (
    <>
      <Container>
        <NavbarContainer>
          <Text>{greetingText()}</Text>
          <InputContainer>
            <Icon>
              <FiSearch />
            </Icon>
            <Input
              type="text"
              placeholder="Search for projects"
              value={countrySearched}
              onChange={(e) => {
                setCountrySearched(e.target.value);
              }}
            />
            <SearchButton onClick={() => getCovidData()}>Search</SearchButton>
           
          </InputContainer>
        </NavbarContainer>
        {/* 2nd container  */}
        <SubContainer>
          <SectionOne>
            <ColumnOne1>
              <Card data={data} />
              <CardActive data={data} />
            </ColumnOne1>
            <ColumnTwo1>
              <TitleText>Country flag</TitleText>
              <FlagCard data={data} />
            </ColumnTwo1>
          </SectionOne>
          <SectionTwo>
            <ColumnOne2>
              <FaqContainer>
                <TitleText>FAQ</TitleText>
                <FaqCard />
              </FaqContainer>
              <JoinCard />
            </ColumnOne2>
            <ColumnTwo2>
              <TitleText>Report</TitleText>
              <Report data={data}/>
            </ColumnTwo2>
          </SectionTwo>
        </SubContainer>
      </Container>
    </>
  );
}

export default Navbar;
