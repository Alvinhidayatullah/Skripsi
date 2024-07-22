// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "Pancing Ulur",
    label: "Pancing Ulur",
    value: 80,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "Gilnet",
    label: "Gilnet",
    value: 49,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "Bagan",
    label: "Bagan",
    value: 80,
    color: "hsl(183, 70%, 50%)",
  },
  {
    id: "Payang",
    label: "Payang",
    value: 90,
    color: "hsl(302, 70%, 50%)",
  },
  {
    id: "Jaring Keritik",
    label: "Jaring Keritik",
    value: 70,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "Longline",
    label: "Longline",
    value: 57,
    color: "hsl(83, 70%, 50%)",
  },
  {
    id: "Pancing Cumi",
    label: "Pancing Cumi",
    value: 80,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "Rawai Tuna",
    label: "Rawai Tuna",
    value: 74,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "Pancing Tonda",
    label: "Pancing Tonda",
    value: 41,
    color: "hsl(31, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 8,
      },
    ]}
    fill={[
      {
        match: {
          id: "Bagan",
        },
        id: "lines",
      },
      {
        match: {
          id: "Payang",
        },
        id: "lines",
      },
      {
        match: {
          id: "Pancing Ulur",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 5,
        itemWidth: -500,
        itemHeight: 17,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;
