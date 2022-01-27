import React from "react";
import { ReportProject, CardContent } from "./Report.element";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function Report({data}) {

const recovery = {}
console.log("final",recovery)
  const fetchData = [
    {
      name: "Recovered",
      A: 40000,
    },
    {
      name: "Active",
      A: 334879,
    },
    {
      name: "Deaths",
      A: 4816,
    },
  ];
  
  return (
    <>
      <ReportProject>
        <CardContent>
          <AreaChart width={380} height={250} data={fetchData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </CardContent>
      </ReportProject>
    </>
  );
}
