import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    strata: "SLTA",
    Pegawai: 32,
  },
  {
    strata: "S2",
    Pegawai: 20,
  },
  {
    strata: "S1",
    Pegawai: 43,
  },
  {
    strata: "D4",
    Pegawai: 32,
  },
  {
    strata: "D3",
    Pegawai: 54,
  },
  {
    strata: "SD",
    Pegawai: 12,
  },
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["Pegawai"]}
    indexBy="strata"
    margin={{ top: 29, right: 15, bottom: 29, left: 35 }}
    padding={0.3}
    maxValue={60}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
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
