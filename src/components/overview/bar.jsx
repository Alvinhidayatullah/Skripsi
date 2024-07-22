import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    date: "12 Jun",
    Capaian: 4,
  },
  {
    date: "25 Nov",
    Capaian: 7,
  },
  {
    date: "17 Feb",
    Capaian: 8,
  },
  {
    date: "28 Des",
    Capaian: 6,
  },
  {
    date: "19 Jun",
    Capaian: 3,
  },
  {
    date: "30 Agu",
    Capaian: 5,
  },
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["Capaian"]}
    indexBy="date"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    maxValue={7}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    valueFormat="<-"
    colors={{ scheme: "paired" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
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
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
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
