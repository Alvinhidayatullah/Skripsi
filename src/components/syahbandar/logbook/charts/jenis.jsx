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
    id: "Cakalang",
    label: "Cakalang",
    value: 75,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "Cucut",
    label: "Cucut",
    value: 40,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "Tuna",
    label: "Tuna",
    value: 29,
    color: "hsl(183, 70%, 50%)",
  },
  {
    id: "Cumi-Cumi",
    label: "Cumi-Cumi",
    value: 73,
    color: "hsl(302, 70%, 50%)",
  },
  {
    id: "Layur",
    label: "Layur",
    value: 52,
    color: "hsl(83, 70%, 50%)",
  },
  {
    id: "Setuhuk",
    label: "Setuhuk Hitam",
    value: 21,
    color: "hsl(83, 70%, 50%)",
  },
  {
    id: "Lemadang",
    label: "Layur",
    value: 54.6,
    color: "hsl(83, 70%, 50%)",
  },
  {
    id: "Hiu",
    label: "Hiu",
    value: 56,
    color: "hsl(83, 70%, 50%)",
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
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "Hiu",
        },
        id: "lines",
      },
      {
        match: {
          id: "Setuhuk",
        },
        id: "lines",
      },
      {
        match: {
          id: "Lemadang",
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
