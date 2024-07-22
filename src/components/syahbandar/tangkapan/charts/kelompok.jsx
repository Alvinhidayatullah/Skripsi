import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "5-10 GT",
    label: "5-10 GT",
    value: 32,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "20-30 GT",
    label: "20-30 GT",
    value: 49,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "30-50 GT",
    label: "30-50 GT",
    value: 28,
    color: "hsl(183, 70%, 50%)",
  },
  {
    id: "50-100 GT",
    label: "50-100 GT",
    value: 90,
    color: "hsl(302, 70%, 50%)",
  },
  {
    id: "100 GT",
    label: "100 GT",
    value: 36,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "> 100 GT",
    label: "> 100 GT",
    value: 21,
    color: "hsl(83, 70%, 50%)",
  },
  {
    id: "10-20 GT",
    label: "10-20 GT",
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
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "30-50 GT",
        },
        id: "lines",
      },
      {
        match: {
          id: "5-10 GT",
        },
        id: "lines",
      },
      {
        match: {
          id: "10-20 GT",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
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
