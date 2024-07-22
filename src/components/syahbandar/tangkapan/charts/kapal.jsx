// src/MyResponsiveBar.js

import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    date: "12 Jun",
    "Berat (Ton)": 34,
  },
  {
    date: "25 Nov",
    "Berat (Ton)": 75,
  },
  {
    date: "17 Feb",
    "Berat (Ton)": 94,
  },
  {
    date: "28 Des",
    "Berat (Ton)": 86,
  },
  {
    date: "19 Jun",
    "Berat (Ton)": 53,
  },
  {
    date: "30 Agu",
    "Berat (Ton)": 79,
  },
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["Berat (Ton)"]}
    indexBy="date"
    margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    maxValue={99}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "set2" }}
    defs={[
      {
        id: "lines",
        type: "lines",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "Berat (Ton)",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
    }
  />
);

export default MyResponsiveBar;
