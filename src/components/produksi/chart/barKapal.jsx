import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    date: "30 Okt",
    Kapal: 250,
    KapalColor: "hsl(136, 70%, 50%)",
  },
  {
    date: "17 Des",
    Kapal: 150,
    KapalColor: "hsl(258, 70%, 50%)",
  },
  {
    date: "25 Mei",
    Kapal: 235,
    KapalColor: "hsl(216, 70%, 50%)",
  },
  {
    date: "23 Nov",
    Kapal: 144,
    KapalColor: "hsl(357, 70%, 50%)",
  },
  {
    date: "15 Agu",
    Kapal: 178,
    KapalColor: "hsl(217, 70%, 50%)",
  },
  {
    date: "19 Jan",
    Kapal: 163,
    KapalColor: "hsl(165, 70%, 50%)",
  },
  {
    date: "21 Apr",
    Kapal: 84,
    KapalColor: "hsl(262, 70%, 50%)",
  },
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["Kapal"]}
    indexBy="date"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    maxValue={1000}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
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
