import React from "react";
import { IoStatsChart } from "react-icons/io5";
import CountUp from 'react-countup';
import {
  RecoveringCard,
  CardContent,
  Chart,
  RecoveringText,
  Recovered,
} from "./Card.element";
function Card({ data }) {
  
  return (
    <RecoveringCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <RecoveringText>Recovered</RecoveringText>
        { data ? <Recovered><CountUp start={0} end={data.country.result.recovered} duration={2.75} separator="," /></Recovered>:null }
      </CardContent>
    </RecoveringCard>
  );
}

export default Card;
