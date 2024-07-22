import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    date: "16 Feb",
    Madidihang: 66,
    MadidihangColor: "hsl(73, 70%, 50%)",
    Jangilus: 185,
    JangilusColor: "hsl(356, 70%, 50%)",
    Layur: 196,
    LayurColor: "hsl(353, 70%, 50%)",
    Cakalang: 25,
    CakalangColor: "hsl(27, 70%, 50%)",
    Cucut: 192,
    CucutColor: "hsl(171, 70%, 50%)",
  },
  {
    date: "13 Agu",
    Madidihang: 69,
    MadidihangColor: "hsl(186, 70%, 50%)",
    Layur: 45,
    LayurColor: "hsl(207, 70%, 50%)",
    Cumi: 109,
    CumiColor: "hsl(302, 70%, 50%)",
    Cucut: 198,
    CucutColor: "hsl(106, 70%, 50%)",
    Cakalang: 115,
    CakalangColor: "hsl(88, 70%, 50%)",
  },
  {
    date: "9 Nov",
    Cumi: 90,
    CumiColor: "hsl(62, 70%, 50%)",
    Cakalang: 30,
    CakalangColor: "hsl(147, 70%, 50%)",
    Jangilus: 173,
    JangilusColor: "hsl(43, 70%, 50%)",
  },
  {
    date: "17 Mei",
    Cucut: 195,
    CucutColor: "hsl(250, 70%, 50%)",
    Layur: 167,
    LayurColor: "hsl(80, 70%, 50%)",
    Cakalang: 50,
    CakalangColor: "hsl(306, 70%, 50%)",
    Cumi: 160,
    CumiColor: "hsl(177, 70%, 50%)",
    Jangilus: 144,
    JangilusColor: "hsl(354, 70%, 50%)",
  },
  {
    date: "16 Mar",
    Cucut: 28,
    CucutColor: "hsl(192, 70%, 50%)",
    Jangilus: 65,
    JangilusColor: "hsl(270, 70%, 50%)",
    Madidihang: 28,
    MadidihangColor: "hsl(99, 70%, 50%)",
    Layur: 40,
    LayurColor: "hsl(198, 70%, 50%)",
    Cakalang: 68,
    CakalangColor: "hsl(185, 70%, 50%)",
  },
  {
    date: "5 Apr",
    Cakalang: 123,
    CakalangColor: "hsl(63, 70%, 50%)",
    Cumi: 149,
    CumiColor: "hsl(175, 70%, 50%)",
    Layur: 59,
    LayurColor: "hsl(232, 70%, 50%)",
    Madidihang: 20,
    MadidihangColor: "hsl(325, 70%, 50%)",
    Cucut: 100,
    CucutColor: "hsl(233, 70%, 50%)",
  },
  {
    date: "20 Jun",
    Layur: 171,
    LayurColor: "hsl(159, 70%, 50%)",
    Madidihang: 115,
    MadidihangColor: "hsl(308, 70%, 50%)",
    Cucut: 27,
    CucutColor: "hsl(5, 70%, 50%)",
    Cumi: 50,
    CumiColor: "hsl(30, 70%, 50%)",
  },
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["Cakalang", "Layur", "Cumi", "Madidihang", "Jangilus", "Cucut"]}
    indexBy="date"
    margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
    padding={0.3}
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
