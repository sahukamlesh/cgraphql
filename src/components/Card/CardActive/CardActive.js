import React from "react";
import CountUp from 'react-countup';
import {ActiveCard,Card,CardContent1,Row,ActiveCardContainer,Title,SubTitle} from './CardActive.element'
export default function CardActive({data}) {

  return (
    <ActiveCard>
      <Card>
        <CardContent1>
          <Row>
            <ActiveCardContainer>
              <Title>Confirmed</Title>
              {data ? <SubTitle><CountUp start={0} end={data.country.result.active} duration={2.75} separator="," /></SubTitle>:null}
              
            </ActiveCardContainer>
          </Row>
        </CardContent1>
      </Card>
      <Card>
        <CardContent1>
          <Row>
            <ActiveCardContainer>
              <Title>Deaths</Title>
              {data ? <SubTitle><CountUp start={0} end={data.country.result.deaths} duration={2.75} separator="," /></SubTitle>:null}
            </ActiveCardContainer>
          </Row>
        </CardContent1>
      </Card><Card>
        <CardContent1>
          <Row>
            <ActiveCardContainer>
              <Title>LastUpdate</Title>
              {data ? <SubTitle>{new Date(data.country.result.updated).toDateString()}</SubTitle>:null}
            </ActiveCardContainer>
          </Row>
        </CardContent1>
      </Card>
    </ActiveCard>
  );
}

